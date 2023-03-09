import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import GoalItem from './componets/GoalItem';


export default function App() {

  // Gli hook sono una nuova aggiunta in React 16.8. Ti consentono di utilizzare lo stato e altre funzionalità di React senza scrivere una classe.
  // https://reactjs.org/docs/hooks-state.html
  const [goalText, textGoal] = useState('');
  // E' una variabile di stato composta da : 
  // 1 goalText =>Nome variabile
  // 2 textGoal => Valore Vatiabile
  // 3 useState('CIAO') => Stato iniziale della variabile se si clicca "vuoto"..In questo caso stampa 'CIAO' se l'input è vuoto

  const [listGoals, setValueGoals] = useState([]);// Crea una nuova variabile di globale specificandone che è una lista "useState([])"

  function inputChange(inputText) { // Una volta inserito il valore TextInput , onChangeText passerà il valore alla funzione iserita..In questo caso la variabile di stato viene settato nel textGoal
    textGoal(inputText);
  }

  function pressInput() {
    // console.log(goalText); => Una volta settato in valore in "text" , con la funzione "onPress" stampa il valore della nome della variabile...In questo caso "goalText"
    if (goalText === '')
      return alert("Non può può essere vuoto");

    // Setto in valore di quella lista "setValueGoals" concatendandone(...nomeValoreLambda) il valore dell'inputText("text" della prima variabile di stato con nome variabile "goalText")
    setValueGoals((valueGoal) => [
      ...valueGoal, { text: goalText, id: Math.random().toString() },//"text" e "key" sono valori necessari per le liste..
      //"text" => un nome a caso per recuperare il valore
      //"key"(o altro) => nome STANDARD..in caso di modifica con nome custome vedere nella FLATLIST la proprietà keyExtractor
    ]);

  }

  return (
    <View style={styles.container}>
      <View style={styles.contentInput}>
        <TextInput style={styles.textInput} placeholder="Inserisci qualcosa" onChangeText={inputChange} />
        <Button title="Aggiungi" onPress={pressInput} />
      </View>
      <View style={styles.goalsContainer}>
        {/* <ScrollView>
          Per poter stampare la lista, bisogna usare il metodo "map" specificandone il nomeLambda dove come esecuzione ci saranno label <Text> con "key"( Obbligatoria e magari con un numero random ) e valore dichiarato 
          {listGoals.map((goal) =>
            <View style={styles.singleGoalView} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>)}
        </ScrollView>*/}
        <FlatList /** Flat list lavora sulle liste in maniera "Pigra" cioè, carica gli elementi nel momento in cui si scrolla e non tutti insieme come  ScrollView */
          data={listGoals}/**Gli elementi che accetta la flatList sono DATA che sarebbe la lista da inserire */
          renderItem={(itemData) => { /** renderItem è la seconda proprietà obbligatoria da aggiungere composta da : elemento singolo (itemData)*/
            /**e dal Return che non è altro che la parte "visiva" */
            return <GoalItem text={itemData.item.text} />;/**E' in nuovo componente aggiunto ..come proprietà possiamo mettetre un nome a caso , in questo caso "text" che verrà richiamato nella props del componete */
            /**Gli elementi si recuperano con : nome del singono elemento (itemData) .item (nome STRANDARD) .nome varibile di come è stato dichiaranto nella lista, in questo caso "text" */
          }}
          keyExtractor={(item, index) => {
            return (item.id)
          }}
          alwaysBounceVertical={false}/**Non obbligatorio, serve per non far "rimbalzare" la lista */
        />
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

});
