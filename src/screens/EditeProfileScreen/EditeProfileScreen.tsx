import { useState } from 'react';
import { useForm, Controller, Control } from 'react-hook-form';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import user from '../../assets/data/user.json'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import { IUser } from '../../types/models';

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface CustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserField;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({label, control, name, multiline=false, rules={},} : CustomInput) => (

  <Controller
       control={control}
       name={name}
       rules={rules}
       render={({field : { value, onChange, onBlur }, fieldState: {error}}) =>{
        return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex:1}}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              multiline={multiline}
              style={[styles.input, {borderColor: error ? colors.error : colors.border},]}/>
              {error && <Text style={{color: colors.error}}>{error.type}</Text>}
          </View>
        </View>
       )}
      }
   />
)
const EditeProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null)
  const {control, handleSubmit, formState:{errors}} = useForm<IEditableUser>();
  const onSubmit = (data: IEditableUser) => {
    console.log("Submit", data);
  }
  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
      if(!didCancel && !errorCode && assets && assets.length > 0){
        setSelectedPhoto(assets[0]);
      }
    }
    )
  }
  return (
    <View style={styles.page}>
      <Image source={{uri: selectedPhoto?.uri || user.image }} style={styles.avatar} />
      <Text onPress={onChangePhoto} style={styles.textButton}>Edite profile photo</Text>
      <CustomInput name= "name" control={control} rules={{require: true}} label="Name" />
      <CustomInput name= "username" control={control} rules={{require: true}} label="Username" />
      <CustomInput name= "website" control={control} rules={{require: true}} label="Website" />
      <CustomInput name= "bio" control={control} rules={{require: true}} label="Bio" multiline />
      <Text style={styles.textButton} onPress={handleSubmit(onSubmit)}>Submit</Text>
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
    borderBottomWidth: 1
  },
})
export default EditeProfileScreen