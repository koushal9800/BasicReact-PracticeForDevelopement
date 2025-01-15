import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

interface Post {
  id: number;
  title: string;
}

const DataFetchingScreen: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchListofPost = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();

      if (data) {
        setData(data);
        setLoading(false);
      } else {
        setData([]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  
  

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
      <Text>DataFetchingScreen</Text>
      <FlatList  data={data}
      renderItem={renderItem}
      />
    </View>
  );
};

export default DataFetchingScreen;
