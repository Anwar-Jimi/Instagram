import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CommentsScreen from '../screens/CommentsScreen';
import { SearchTabNavigatorParamList } from './types';
import UserSearchScreen from '../screens/UserSearchScreen/UserSearchScreen';

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

function SearchTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Users" component={UserSearchScreen} />
      <Tab.Screen name="Posts" component={CommentsScreen} />
    </Tab.Navigator>
  );
}

export default SearchTabNavigator;