
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import {View,Text, TouchableOpacity} from 'react-native'
import { stackParamList } from "./StackNavigationDemo"

type StackScreen1NavigationProp = StackNavigationProp<stackParamList,'StackScreen1'>

const StackScreen1: React.FC = ()=>{

const navigation = useNavigation<StackScreen1NavigationProp>()

    return (
        <View>
            <Text>StackScreen1</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("StackScreen2",{itemId:456})} >
                <Text>Go to Stack Screen 1</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StackScreen1