
import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import {View,Text, TouchableOpacity} from 'react-native'
import { stackParamList } from "./StackNavigationDemo"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"

type StackScreen2NavigationProp = StackNavigationProp<stackParamList,'StackScreen2'>
type StackScreen2Routeprops = RouteProp<stackParamList,'StackScreen2'>

const StackScreen2: React.FC = ()=>{

const navigation = useNavigation<StackScreen2NavigationProp>()
const route = useRoute<StackScreen2Routeprops>()

    return (
        <View>
            <Text>StackScreen2</Text>
            <Text>{route.params.itemId}</Text>
            <TouchableOpacity onPress={()=>navigation.goBack()} >
                <Text>GoBack to the Screen1</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StackScreen2