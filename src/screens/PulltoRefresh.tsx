import React, { useState } from "react";
import { View,Text, FlatList, RefreshControl } from "react-native";

const Initial_Data = Array.from({ length: 20 }, (_, index: number) => ({
    id: index.toString(),
    title: `item ${index + 1}`,
  }));

const PulltoRefresh = () =>{

const [refreshing,setRefreshing] = useState(false)
const [data,setData] = useState(Initial_Data)
const [loading,setLoading] = useState(false)

const renderItem = ({item}:{item:{id:string; title:string}})=>(
    <View style={{ padding:20, borderBottomColor:'red', borderBottomWidth:1 }} >
        <Text style={{ fontSize:18 }} >{item.title}</Text>
    </View>
)

const loadMoreItems = () =>{
    if(!loading){
        setLoading(true)
        setTimeout(()=>{
            const newItems = Array.from({length:10}, (_,index)=>({
                id: (data.length+ index).toString(),
                title:`item ${data.length+index + 1}`
            }))
            setData([...data,...newItems])
            setLoading(false)
        },1000)
    }
}

const handleOnRefresh = () =>{
    setRefreshing(true);
    setTimeout(()=>{
        setData(Initial_Data);
        setRefreshing(false)
    },2000)
}

    return (
        <View>
            <Text>Pull to refresh</Text>
            <FlatList 
            keyExtractor={item=>item.id}
            data={data}
            renderItem={renderItem}
            onEndReached={loadMoreItems}
            onEndReachedThreshold={0.1}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
            }
            />
        </View>
    )
}

export default PulltoRefresh