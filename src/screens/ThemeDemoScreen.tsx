import React from "react";
import {View,Text, Switch} from 'react-native'
import { useTheme } from "../Context/ThemeContext";

const ThemeDemoScreen = () =>{

const {theme,toggleTheme} = useTheme()
const isDarkMode = theme === 'dark'

    return (
        <View style={{ flex:1, backgroundColor:isDarkMode?'#000':'#fff' }} >
            <Text style={{ color:isDarkMode?'#fff':'#000' }} >ThemeDemoScreen</Text>
            <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{false:'red',true:'green'}}
            thumbColor={isDarkMode?'grey':'yellow'}
            />
        </View>
    )
}

export default ThemeDemoScreen