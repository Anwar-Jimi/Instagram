import { StyleSheet, Text, View, Image } from "react-native";

import colors from "./src/theme/colors";
import fonts from "./src/theme/fonts";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Ionicons";

const App = () => {
  return(
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.userAvater}
        source={{
          uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg"
        }}/>
        <Text style={styles.userName}>Anwar</Text>
        <Entypo name="dots-three-horizontal" size={16} style={styles.threeDots}/>
      </View>

      {/* Post */}
      <Image style={styles.image}
      source={{
        uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
      }}
       />
      {/* Footer */}
      <View style={styles.footer}>
         <View style={styles.iconContainer}>

           <AntDesign name={'hearto'} size={24} style={styles.icon} color={colors.black} />
           <Ionicons name="chatbubble-outline" size={24} style={styles.icon}  color={colors.black}/>
           <Feather name="send" size={24} style={styles.icon} color={colors.black} />
           <Feather name="bookmark" size={24} style={{marginLeft: "auto"}} color={colors.black} />
    
         </View>
         {/* Liked */}
         <Text style={styles.text}>
          Liked by {' '}
          <Text style={styles.bold}>zhirou</Text> and {' '}
          <Text style={styles.bold}>66 others</Text>
          </Text>
          {/* Post description */}
          <Text style={styles.text}>
             Laudantium,
            deserunt! Rem odit error obcaecati nihil cum, fugit voluptas at est
            aperiam deserunt ad repellendus praesentium! Tempore, odit! Illo, ad fuga!
          </Text>
          {/* Comments */}
          <Text>View all 16 comments</Text>
          <View style={styles.comment}>
          <Text style={styles.commentText}>
          <Text style={styles.bold}>Anwar</Text>{' '}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Text>
          <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
          </View>
          {/* Posted date */}
          <Text>29 february 2024</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  post : {

  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userAvater: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: "auto",
  },
  footer: {
    padding: 5,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 6,
  },
  icon: {
      marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  commentText: {
    flex: 1,
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: "row",
    alignItems: "center",
  }
})
export default App;