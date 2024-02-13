import { Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface IButton {
  text?: String;
  onPress?: () => void
}
const Button = ({text = "", onPress = () => {} } : IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container : {
    borderWidth: 1,
    borderColor: colors.border,

    padding: 5,
    alignItems: "center",

    flex: 1,
    margin: 5,
  },
  text : {
    fontWeight: fonts.weight.semi,
    color: colors.black
  }
})

export default Button