import { StyleSheet, View, FlatList} from "react-native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CommentsScreen from "./src/screens/CommentsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import EditeProfileScreen from "./src/screens/EditeProfileScreen";
import PostUploadScreen from "./src/screens/PostUploadScreen";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./src/navigation";

const App = () => {
  return(
    <Navigation />
  );
}

export default App;