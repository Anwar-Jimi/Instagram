import { ReactNode } from 'react';
import { Pressable, Text } from 'react-native'

interface IDoublePressable {
    onDoublePress?: () => void;
    children: ReactNode;
}
const DoublePressable = ({ onDoublePress= () => {}, children }: IDoublePressable) => {
    let lastTab = 0;
    const handleDoublePress = () => {
      const now = Date.now();
      if(now - lastTab < 500){
        onDoublePress();
      }
      lastTab = now;
    }
    return(
        <Pressable onPress={handleDoublePress}>
            {children}
        </Pressable>
    )
}

export default DoublePressable;