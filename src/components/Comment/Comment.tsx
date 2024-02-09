import { View, Text, StyleSheet } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import { IComment } from '../../types/models';

interface ICommmentProps {
    comment: IComment;
}
const Comment = ({ comment }: ICommmentProps) => {
  return (
    <View style={styles.comment}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username}</Text>{' '}
            {comment.comment}.
        </Text>
          <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
    </View>
  )
}

const styles = StyleSheet.create({
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

export default Comment