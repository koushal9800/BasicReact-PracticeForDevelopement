import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  Animated,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { addTask, fetchTask, Task } from '../store/tasksSlice';

const TaskList: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const dispatch = useDispatch<AppDispatch>()

  const tasks = useSelector((state: RootState)=>state.tasks.tasks)
  const status = useSelector((state: RootState)=>state.tasks.status)

  useEffect(()=>{
    if(status === 'idle') dispatch(fetchTask())
  },[status,dispatch])

  const handleAddNewTask = () =>{
    if(newTaskTitle.trim()){
        dispatch(addTask({
            title: newTaskTitle.trim(),
            completed: false
        }))
    }
    setNewTaskTitle('')
    setIsModalVisible(false)
  }

  const createRenderTask = ({item}:{item:Task}) =>{
return (
   <View>
    <Text>{item.title}</Text>
    <TouchableOpacity>
        <Text>Delete</Text>
    </TouchableOpacity>
   </View>
)
  }

  return (
    <View style={{flex: 1}}>
      <Text style={{ padding:16, fontSize:20, fontWeight:'bold' }} >TaskList</Text>

      <FlatList
      data={tasks}
      renderItem={createRenderTask}
      keyExtractor={item=>item.id}
      />

      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={{
          position: 'absolute',
          right: 16,
          bottom: 16,
          backgroundColor: '#E74292',
          width: 100,
          height: 60,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}>
        <Text style={{fontSize: 16, color: '#fff', fontWeight: '700'}}>
          Add
        </Text>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#8395A7',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 20,
              width: '90%',
              maxWidth: 400,
              elevation: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Text
                style={{fontSize: 20, color: '#2F363F', fontWeight: 'bold'}}>
                Add New Task
              </Text>
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                style={{
                  backgroundColor: '#2C3335',
                  padding: 12,
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 5,
                }}>
                <Text style={{fontSize: 12, color: '#fff', fontWeight: '700'}}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={{
                marginBottom: 16,
              }}
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
              placeholder="Enter Task Title"
              autoFocus
            />

            <View
              style={{
                marginTop: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                style={{
                  backgroundColor: '#E71C23',
                  padding: 12,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 5,
                }}>
                <Text style={{fontSize: 12, color: '#fff', fontWeight: '700'}}>
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleAddNewTask}
                style={{
                  backgroundColor: '#218F76',
                  padding: 12,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 5,
                }}>
                <Text style={{fontSize: 12, color: '#fff', fontWeight: '700'}}>
                  Add Task
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};
export default TaskList;
