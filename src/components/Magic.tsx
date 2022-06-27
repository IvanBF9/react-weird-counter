import React, { useEffect } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import colors from '../colors';

export default function MagicCompotent ({setVisualCounter} : {setVisualCounter: React.Dispatch<React.SetStateAction<number>>}) {

    useEffect(()=>{
        const magicNumber = Math.round(Math.random() * 100);
        setVisualCounter(magicNumber);
    }, [])

    return (
        <View style={{position: 'absolute', top: 40, height:120}}>
            <ImageBackground source={require('../../assets/cat.png')} resizeMode="contain" style={{flex: 1,justifyContent: "center", height:80}}>    
            </ImageBackground>
            <Text style={{fontSize: 32, color: colors.text, marginTop: 8}}>
                    Magic Component
            </Text>
        </View>
    );
}