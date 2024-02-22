import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import logo from "../assets/images/logo.png";
import { Image } from "react-native";
import { HomeStackNavigatorParamList } from "./types";

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
           name="Feed"
           component={HomeScreen}
           options={{headerTitle: HeaderTitle, headerTitleAlign: "center"}} />

        <Stack.Screen
            name='UserProfile'
            component={ProfileScreen}
            options={{title: "Profile"}}
                />
    </Stack.Navigator>
  )
}
const HeaderTitle = () => {
    return(
        <Image source={logo} resizeMode='contain' style={{width: 150, height: 45}}/>
    );
}


export default HomeStackNavigator