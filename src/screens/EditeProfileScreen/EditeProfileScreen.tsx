import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import user from '../../assets/data/user.json'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface CustomInput {
  label: string;
  multiline?: boolean;
}

const CustomInput = ({label, multiline=false} : CustomInput) => (
  <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={label} multiline={multiline} style={styles.input}/>
  </View>
)
const EditeProfileScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={{uri: user.image }} style={styles.avatar} />
      <Text style={styles.textButton}>Edite profile photo</Text>
      <CustomInput label="Name" />
      <CustomInput label="Username" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline />
      <Text style={styles.textButton}>Submit</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  label: {
    width: 75,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1
  },
})
export default EditeProfileScreen