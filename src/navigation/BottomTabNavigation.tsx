import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import PostUploadScreen from "../screens/PostUploadScreen"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import colors from "../theme/colors"

const Tab = createBottomTabNavigator()
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
       screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
       }}>
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="home-filled" size={size} color={color} />
            ),
          }} />
        <Tab.Screen
          name="Search"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="search" size={size} color={color} />
            ),
          }} />
        <Tab.Screen
           name="Upload"
           component={PostUploadScreen}
           options={{
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="upload" size={size} color={color} />
            ),
          }} />
        <Tab.Screen
            name="Notifications"
            component={PostUploadScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="notifications" size={size} color={color} />
                ),
              }} />
        <Tab.Screen
            name="MyProfile"
            component={ProfileScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="user-circle-o" size={size} color={color} />
                ),
              }} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation