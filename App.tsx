import { StyleSheet, View, FlatList} from "react-native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CommentsScreen from "./src/screens/CommentsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const App = () => {
  return(
    <View style={styles.app}>
      <ProfileScreen />
    </View>
  );
}

const styles = StyleSheet.create ({
  app : {
    flex: 1,
  },
})
export default App;