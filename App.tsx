import { StyleSheet, View, FlatList} from "react-native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CommentsScreen from "./src/screens/CommentsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import EditeProfileScreen from "./src/screens/EditeProfileScreen";
import PostUploadScreen from "./src/screens/PostUploadScreen";

const App = () => {
  return(
    <View style={styles.app}>
      <PostUploadScreen />
    </View>
  );
}

const styles = StyleSheet.create ({
  app : {
    flex: 1,
  },
})
export default App;