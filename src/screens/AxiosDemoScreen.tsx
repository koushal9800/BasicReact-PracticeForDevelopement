import React, { useEffect, useState } from "react";
import {View,Text, FlatList} from 'react-native'
import axios from 'axios'

interface Post {
    id: number;
    title: string;
  }

  const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
  })

  //request
  api.interceptors.request.use(config=>{
    console.log('Request Sent', config)
    return config
  })

  //response
  api.interceptors.response.use(response=>{
    console.log('Request Sent', response)
    return response
  })

const AxiosDemoScreen:React.FC = () =>{
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

const fetchListofPost = async()=>{
    try{
    setLoading(true)
        const response = await api.get<Post[]>('/posts')
        if(response){
            setData(response.data)
            setLoading(false)
        }else{
            setData([])
            setLoading(false)
        }
    }catch(e){
        console.log(e)
    }
}

  useEffect(() => {
    fetchListofPost();
  }, []);


  const renderItem = ({item}:{item:Post}) =>(
    <View>
        <Text>{item.title}</Text>
    </View>
 )

    return (
        <View>
            <Text>AxiosDemoScreen</Text>
            <FlatList  data={data}
      renderItem={renderItem}
      />
        </View>
    )
}

export default AxiosDemoScreen