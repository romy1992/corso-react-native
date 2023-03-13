import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InputGoal from './componets/InputGoal';
import OutputGoal from './componets/OutputGoal'

export default function App() {

  const [list, valueList] = useState([])

  return (
    <View style={styles.container}>

      <InputGoal container={valueList} />

      <OutputGoal container={list} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
