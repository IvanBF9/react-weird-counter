import React from 'react';
import { ImageBackground, Text, View} from 'react-native';
export default function counter({children} : {children: React.ReactNode}) {

  return (
      <View style={{width: '100%', height: '50%'}}>
        <ImageBackground source={require('../../assets/bk1.png')} resizeMode="contain" style={{flex: 1,justifyContent: "center"}}>
            <Text style={{textAlign: 'center', fontSize:40, fontWeight: 'bold'}}>{children}</Text>
        </ImageBackground>
      </View>
  );
}
