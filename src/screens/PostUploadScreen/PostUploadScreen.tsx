import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
  useEffect(() => {
    const getPermission = async () => {};
    getPermission();
  }, []);
  if(hasPermissions === null){
    return <Text>Loading ....</Text>
  }
  if(hasPermissions === false){
    return <Text>No access to the camera</Text>
  }
  return (
    <View>
      <Text>PostUploadScreen</Text>
    </View>
  )
}

export default PostUploadScreen

const styles = StyleSheet.create({})