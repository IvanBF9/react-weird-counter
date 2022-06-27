import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Btn from './src/components/customButton';
import Counter from './src/components/Counter';
import Magic from './src/components/Magic'
import colors from './src/colors';
import Slider from './src/components/sliderComponent';
import { useEffect, useState } from 'react';
export default function App() {

  const [getCounter, setCounter] = useState(0);
  const [getVisualCounter, setVisualCounter] = useState(getCounter);
  const [getMacgicComponent, setMagicComponent] = useState(false);

  useEffect(() => {
    setVisualCounter(getCounter)
    if (getCounter%5 == 0) setVisualCounter(0);
    if (getCounter%7 == 0 && getCounter !== 0){
      setMagicComponent(true)
    }else setMagicComponent(false)

  }, [getCounter])

  return (
    <View style={styles.container}>
      {getMacgicComponent && <Magic setVisualCounter={setVisualCounter}> </Magic> }
      <Counter>{getVisualCounter}</Counter>
      <View style={styles.inlineCt}>
        <Btn onPress={()=>setCounter((old) => old - 1)}>-1</Btn>
        <Btn style={{backgroundColor: colors.background}} onPress={()=>setCounter(0)}>Reset</Btn>
        <Btn onPress={()=>setCounter((old) => old + 1)}>+1</Btn>
      </View>
      <Slider setCounter={setCounter}></Slider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inlineCt: {
    flexDirection: 'row'
  }
});
