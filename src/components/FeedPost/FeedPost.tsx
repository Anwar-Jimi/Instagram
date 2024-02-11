import { useState } from "react";
import { Pressable, Text, View, Image } from "react-native";

import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Ionicons";
import Comment from "../Comment";
import DoublePressable from "../DoublePressable";

import styles from "./styles";
import { IPost } from "../../types/models";


interface IFeedPost {
    post: IPost
}
const FeedPost = ({post} : IFeedPost) => {
  const [isDescriptionExpanded, setisDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setisDescriptionExpanded(v => !v);
  }
  const toggleLike = () => {
    setIsLiked(v => !v)
  }
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
      <DoublePressable onDoublePress={toggleLike}>
      <Image style={styles.image}
      source={{
        uri:post.image,
      }}
       />
      </DoublePressable>
      {/* Footer */}
      <View style={styles.footer}>
         <View style={styles.iconContainer}>
           <Pressable onPress={toggleLike}>
           <AntDesign name={isLiked ? 'heart' : 'hearto'}
                      size={24} style={styles.icon}
                      color={isLiked ? colors.accent : colors.black}
                      />
           </Pressable>
           <Ionicons name="chatbubble-outline"
                     size={24}
                     style={styles.icon}
                     color={colors.black}/>
           <Feather name="send"
                    size={24}
                    style={styles.icon}
                    color={colors.black} />
           <Feather name="bookmark"
                    size={24}
                    style={{marginLeft: "auto"}}
                    color={colors.black} />

         </View>
         {/* Liked */}
         <Text style={styles.text}>
          Liked by {' '}
          <Text style={styles.bold}>zhirou</Text> and {' '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
          </Text>
          {/* Post description */}
          <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
            <Text style={styles.bold}>{post.user.username}</Text> {post.description}
          </Text>
          <Text onPress={toggleDescriptionExpanded}>{isDescriptionExpanded ? 'less' : 'more'}</Text>
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