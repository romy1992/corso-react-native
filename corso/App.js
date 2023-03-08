import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [goalText, text] = useState('');

  function inputChange(inputText) {
    text(inputText);
  }

  function pressInput() {
    if (goalText === 'rosario')
      console.log(goalText);
    else
      console.log('noooo');
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentInput}>
        <TextInput style={styles.textInput} placeholder="Inserisci qualcosa" onChangeText={inputChange} />
        <Button title="Aggiungi" onPress={pressInput} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>Lista ....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  contentInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccccc'
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 10,
    padding: 8
  },
  goalsContainer: {
    marginTop: 20,
    flex: 10,
  }
});
