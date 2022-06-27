import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import colors from '../colors';

export default function PrimaryBtn({children, onPress, style = {}, textStyle = {}} : {children: React.ReactNode, onPress: ()=>void, style?: ViewStyle, textStyle?: TextStyle}) {

  return (
      <TouchableOpacity style={{backgroundColor: colors.primary, margin: 8, padding: 8, borderRadius: 32, minWidth: 80, borderColor: colors.secondary, borderWidth: 2, ...style}} onPress={onPress}>
        <Text style={{color: colors.text, fontSize:16, fontWeight: 'bold', textAlign: 'center', ...textStyle}}>{children}</Text>
      </TouchableOpacity>
  );
}
