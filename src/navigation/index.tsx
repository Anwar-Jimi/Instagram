import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import logo from "../assets/images/logo.png";
import BottomTabNavigation from './BottomTabNavigation';
import CommentsScreen from '../screens/CommentsScreen';
import { RootNavigator } from './types';

const Stack = createNativeStackNavigator<RootNavigator>();
const linking: LinkingOptions<RootNavigator> = {
    prefixes: ['mychat://', 'https://mychat.com'],
    config: {
        initialRouteName: 'Home',
        screens: {
            Comments: 'comments',
            Home: {
                screens: {
                    HomeStack: {
                        initialRouteName: 'Feed',
                        screens: {
                            UserProfile: 'user/:userId'
                        }
                    }
                }
            }
        }
    }
}
const Navigation = () => {
    return (
        <NavigationContainer linking={linking}>

            <Stack.Navigator
              initialRouteName='Home'
              screenOptions={{headerShown: true}}>
                <Stack.Screen
                    name='Home'
                    component={BottomTabNavigation}
                    options={{headerShown: false}}/>
                <Stack.Screen
                   name='Comments'
                   component={CommentsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;