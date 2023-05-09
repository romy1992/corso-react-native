import { useState, useEffect } from 'react';
import { Alert, Button, Dimensions, FlatList, Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import InputGoal from './componets/InputGoal';

export default function App() {

  const [value, setValue] = useState('');
  const [valuesList, setValueList] = useState([]);

  // Prima di ogni cosa perchè non è attaccata a nessuna variabile
  useEffect(() => {
    alert("Questa è una lista di appunti")
  }, []);

  // Effetto che viene applicato dopo la modifica della variabile : valuesList 
  useEffect(() => {
    if (valuesList.length !== 0)
      alert("Nella lista è stata aggiunta una parola")
  }, [valuesList])


  function addValue() {
    if (value === '' || value === null)
      return Alert.alert(
        'Campo obbligatorio!',
        'Inserire qualcosa nel campo.',
        [{ text: 'Ok', style: 'destructive' }]);


    setValueList((valueText) => [
      ...valueText, { text: value, id: Math.random().toString() }
    ])
    setValue('')
  }

  function deleteValue(id) {
    setValueList((current) => {
      return current.filter((goal) => goal.id !== id);
    });
  }


  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.bodyContainer}>
        <View style={styles.container}>
          <InputGoal inputValue={value} setInputValue={setValue} />
          <Button title='Aggiungi' onPress={addValue} />
        </View>
        <FlatList
          style={styles.flatList}
          data={valuesList}
          renderItem={(itemValue) =>
            <Pressable onPress={deleteValue.bind(this, itemValue.item.id)}>
              <Text style={styles.textFLat}
                key={itemValue.item.id}>{itemValue.item.text}</Text>
            </Pressable>
          }
        />
      </View>
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
    margin: 10,
    padding: 5,
    borderWidth: 1,
    backgroundColor: 'gray',
    borderRadius: 5,
    width: deviceWith < 360 ? '70%' : '90%'
  },
  textFLat: {
    padding: 5,
    backgroundColor: 'black',
    margin: 5,
    color: 'white',
    borderRadius: 5,
    opacity: 0.9
  }
});
