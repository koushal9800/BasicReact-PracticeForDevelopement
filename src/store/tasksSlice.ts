import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'


export interface Task {
    id: string;
    title: string;
    completed: boolean
}

interface TaskState {
    tasks : Task[];
    status : 'idle' | 'loading' | 'suceeded' | 'failed';
    error : string | null
}

const initialState: TaskState = {
tasks: [],
status: 'idle',
error: null
}

export const fetchTask = createAsyncThunk('tasks/fetchTask', async()=>{
    const storedTask = await AsyncStorage.getItem('tasks') 
    return storedTask ? JSON.parse(storedTask) : []
} )

export const addTask = createAsyncThunk('tasks/addTask', async(task:Omit<Task, 'id'>)=>{
    console.log(task)
    const newTask = {...task, id: Date.now().toString()}
    const storedTask = await AsyncStorage.getItem('tasks')
    const tasks = storedTask ? JSON.parse(storedTask) : []
    tasks.push(newTask)

    await AsyncStorage.setItem('tasks', JSON.stringify(tasks))
    return newTask
})

const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{},
    extraReducers:builder =>{
        builder.addCase(fetchTask.pending, state=>{
            state.status = 'loading'
        }).addCase(fetchTask.fulfilled, (state,action: PayloadAction<Task[]>)=>{
            state.status = 'suceeded'
            state.tasks = action.payload
        }).addCase(fetchTask.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message || null
        }).addCase(addTask.fulfilled, (state,action)=>{
            
            state.tasks.push(action.payload)
        })
    }
})

export default tasksSlice.reducer