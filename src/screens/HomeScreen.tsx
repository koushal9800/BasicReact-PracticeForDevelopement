import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import { RootStackParamList } from "../RootNavigator";

type HomeScreenNavigationProps = StackNavigationProp<RootStackParamList,'Home'>


const HomeScreen:React.FC = ()=>{
 
const navigation = useNavigation<HomeScreenNavigationProps>()

    return (
        <View>
            <Text>HomeScreen</Text>
            <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("StackDemo")} >
                <Text>Stack navigation Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("TabDemo")} >
                <Text>Tab navigation Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("PulltoRefresh")} >
                <Text>PulltoRefresh</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("DataFetchingScreen")} >
                <Text>DataFetchingScreen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("AxiosDemoScreen")} >
                <Text>AxiosDemoScreen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("ThemeDemoScreen")} >
                <Text>Theme Demo Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        
    }
})

export default HomeScreen