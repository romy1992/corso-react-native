import { useState } from 'react';
import { Button, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import InputGoal from './componets/InputGoal';

export default function App() {

  const [value, setValue] = useState('');
  const [valuesList, setValueList] = useState([]);

  function addValue() {
    setValueList((valueText) => [
      ...valueText, { text: value, id: Math.random().toString() }
    ])
    setValue('')
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <InputGoal inputValue={value} setInputValue={setValue} />
        <Button title='Aggiungi' onPress={addValue} />
      </View>
      <FlatList
        style={styles.flatList}
        data={valuesList}
        renderItem={(itemValue) =>
          <Text key={itemValue.item.id}>{itemValue.item.text}</Text>
        }
      />
    </>
  );
}

const deviceWith = Dimensions.get('window').width;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    marginTop: Platform.select({ ios: 10, android: 20 })
  },
  container: {
    // marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    marginTop: 10
  }
});
