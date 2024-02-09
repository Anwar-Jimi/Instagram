import { StyleSheet, Text, View, Image } from "react-native";

import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import Comment from "../Comment";
import { IPost } from "../../types/models";

interface IFeedPost {
    post: IPost
}
const FeedPost = ({post} : IFeedPost) => {
  return(
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.userAvater}
        source={{
          uri: post.user.image,
        }}/>
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo name="dots-three-horizontal" size={16} style={styles.threeDots}/>
      </View>

      {/* Post */}
      <Image style={styles.image}
      source={{
        uri:post.image,
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
          <Text style={styles.bold}>{post.nofLikes} others</Text>
          </Text>
          {/* Post description */}
          <Text style={styles.text}>
            <Text style={styles.bold}>{post.user.username}</Text> {post.description}
          </Text>
          {/* Comments */}
          <Text>View all {post.nofComments} comments</Text>
          {post.comments.map(comment => (
            <Comment key={comment.id} comment={comment}/>
          ))}
          {/* Posted date */}
          <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
}

export default FeedPost;