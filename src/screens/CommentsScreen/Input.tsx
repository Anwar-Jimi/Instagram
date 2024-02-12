import { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const Input = () => {
    const [newComment, setNewComment] = useState("new Comment")
    const onPost = () => {
        console.warn('Posting the comments')
    }
  return (
    <View style={styles.root}>
      <Image
         source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg"}}
         style={styles.image} />
      <TextInput
          value={newComment}
          onChangeText={newText => setNewComment(newText)}
          placeholder='Write your comment ...'
          multiline
          style={styles.input}/>
      <Text onLongPress={onPost} style={styles.button}>Post</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        padding: 10,
        borderTopWidth: 1,
        borderColor: colors.border,
    },
    image: {
        width: 40,
        aspectRatio: 1,
        borderRadius: 20,
    },
    input: {
        flex: 1,

        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 25,

        marginVertical: 5,
        marginHorizontal: 10,
        marginLeft: 5,

        paddingRight: 50,
    },
    button: {
        position: "absolute",
        right: 15,
        top: 15,
        fontSize: fonts.size.s,
        fontWeight: fonts.weight.full,
        color: colors.primary
    }
})
export default Input;