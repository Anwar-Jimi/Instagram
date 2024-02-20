import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import logo from "../assets/images/logo.png";
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator
              initialRouteName='Home'
              screenOptions={{headerShown: true}}>
                <Stack.Screen
                    name='Home'
                    component={BottomTabNavigation}
                    options={{headerShown: false}}/>
                <Stack.Screen
                   name='UserProfile'
                   component={ProfileScreen}
                   options={{title: "Profile"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const HeaderTitle = () => {
    return(
        <Image source={logo} resizeMode='contain' style={{width: 150, height: 45}}/>
    );
}

export default Navigation;