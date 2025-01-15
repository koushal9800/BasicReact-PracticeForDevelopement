import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {View,Text} from 'react-native'
import TabScreen1 from "./TabScreen1";
import TabScreen2 from "./TabScreen2";
import TaskList from "../../screens/TaskList";
import Projects from "../../screens/Projects";


type BottomTabParamList = {
    Tasks: undefined;
    Projects: undefined
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>()
const TabNavigationDemo:React.FC = () =>{
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Tasks" component={TaskList} />
            <BottomTab.Screen name="Projects" component={Projects} />
        </BottomTab.Navigator>
    )
}

export default TabNavigationDemo