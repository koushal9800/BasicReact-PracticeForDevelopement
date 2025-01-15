import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import StackNavigationDemo from './components/stck/StackNavigationDemo'
import TabNavigationDemo from './components/tab/TabNavigationDemo';
import PulltoRefresh from './screens/PulltoRefresh';
import DataFetchingScreen from './screens/DataFetchingScreen';
import AxiosDemoScreen from './screens/AxiosDemoScreen';
import ThemeDemoScreen from './screens/ThemeDemoScreen';

export type RootStackParamList = {
    Home: undefined;
    StackDemo: undefined;
    TabDemo: undefined;
    PulltoRefresh: undefined;
    DataFetchingScreen: undefined;
    AxiosDemoScreen: undefined;
    ThemeDemoScreen:undefined
}
const Stack = createStackNavigator<RootStackParamList>()
const RootNavigator: React.FC = () =>{
    return(
<Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='StackDemo' component={StackNavigationDemo}/>
    <Stack.Screen name='TabDemo' component={TabNavigationDemo}/>
    <Stack.Screen name='PulltoRefresh' component={PulltoRefresh}/>
    <Stack.Screen name='DataFetchingScreen' component={DataFetchingScreen}/>
    <Stack.Screen name='AxiosDemoScreen' component={AxiosDemoScreen}/>
    <Stack.Screen name='ThemeDemoScreen' component={ThemeDemoScreen}/>
</Stack.Navigator>
    )
}

export default RootNavigator