import React from 'react';
import {useState} from 'react'
import Slider from '@react-native-community/slider';
import Btn from './customButton';
import { Text, View} from 'react-native';
import colors from '../colors';

export default function slider({setCounter} : {setCounter: React.Dispatch<React.SetStateAction<number>>}) {

    const [sliderVal, setSliderVal] = useState(0);

    const add = () => {
        setCounter((old) => old + sliderVal);
    }
    const substract = () => {
        setCounter((old) => old - sliderVal);
    }
    const multiply = () => {
        setCounter((old) => old * sliderVal);
    }

  return (
    <View style={{padding:8, width:'100%'}}>
        <Text style={{color: colors.text, textAlign: 'center', fontSize: 32}}>{sliderVal}</Text>
        <Slider
            style={{width: '100%', height: 40,}}
            step={1}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor={colors.text}
            maximumTrackTintColor={colors.secondary}
            thumbTintColor={colors.text}
            onValueChange={value => setSliderVal(value)}
        />
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
            <Btn onPress={substract}>Soustraire</Btn>
            <Btn style={{backgroundColor: colors.background}} onPress={multiply}>Multiplier</Btn>
            <Btn onPress={add}>Ajouter</Btn>
      </View>
    </View>
  );
}