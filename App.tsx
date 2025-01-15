import React, { useEffect } from "react";
import { View,Text, Alert } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import RootNavigator from "./src/RootNavigator";
import { ThemeProvider } from "./src/Context/ThemeContext";
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {Provider} from 'react-redux'
import { store } from "./src/store/store";
const App = () =>{

useEffect(()=>{
  requestPermissionAndroid()
},[])

const requestPermissionAndroid = async()=>{
  const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  if(granted === PermissionsAndroid.RESULTS.GRANTED){
    // Alert.alert('Permission Granted')
    getToken()
  }else {
    // Alert.alert('Permission Denied')
  }
}

useEffect(() => {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

  return unsubscribe;
}, []);


const getToken = async()=>{
  const token = await messaging().getToken();
  console.log("token",token)
}

  return (
    <Provider store={store} >
    <NavigationContainer>
    <RootNavigator/>
    </NavigationContainer>
    </Provider>
  )
}

export default App