import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  // Gli hook sono una nuova aggiunta in React 16.8. Ti consentono di utilizzare lo stato e altre funzionalità di React senza scrivere una classe.
  // https://reactjs.org/docs/hooks-state.html
  const [goalText, text] = useState('');
  // E' una variabile di stato composta da : 
  // 1 goalText =>Nome variabile
  // 2 text => Valore Vatiabile
  // 3 useState('CIAO') => Stato iniziale della variabile se si clicca "vuoto"..In questo caso stampa 'CIAO' se l'input è vuoto

  const [listGoals, setValueGoals] = useState([]);// Crea una nuova variabile di globale specificandone che è una lista "useState([])"

  function inputChange(inputText) { // Una volta inserito il valore TextInput , onChangeText passerà il valore alla funzione iserita..In questo caso la variabile di stato viene settato nel text
    text(inputText);
  }

  function pressInput() {
    // console.log(goalText); => Una volta settato in valore in "text" , con la funzione "onPress" stampa il valore della nome della variabile...In questo caso "goalText"
    if (goalText === '')
      return alert("Non può può essere vuoto");

    setValueGoals((valueGoal) => [...valueGoal, goalText]); // Setto in valore di quella lista "setValueGoals" concatendandone(...nomeValoreLambda) il valore dell'inputText("text" della prima variabile di stato con nome variabile "goalText")

  }

  return (
    <View style={styles.container}>
      <View style={styles.contentInput}>
        <TextInput style={styles.textInput} placeholder="Inserisci qualcosa" onChangeText={inputChange} />
        <Button title="Aggiungi" onPress={pressInput} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {/* Per poter spampare la lista, bisogna usare il metodo "map" specificandone il nomeLambda dove come esecuzione ci saranno label <Text> con "key"( Obbligatoria e magari con un numero random ) e valore dichiarato */}
          {listGoals.map((goal) =>
            <View style={styles.singleGoalView} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>)}
        </ScrollView>
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
  },
  singleGoalView: {
    padding: 4,
    borderRadius: 5,
    backgroundColor: 'blue',
    marginTop: 10
  },
  goalText: {
    color: 'white'
  }
});
