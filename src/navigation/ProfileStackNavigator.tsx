import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProfileScreen from "../screens/ProfileScreen";
import EditeProfileScreen from "../screens/EditeProfileScreen";
import { ProfileStackNavigatorParamList } from "./types";

const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name='Edit Profile' component={EditeProfileScreen}/>
    </Stack.Navigator>
  )
}

export default ProfileStackNavigator;