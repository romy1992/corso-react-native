import { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import TextGoalInput from './componets/TextGoalInput';
import FlatComp from './componets/FlatComp';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [modaleInvisible, valueInvisible] = useState(false);

  const [listGoals, setValueGoals] = useState([]);// Crea una nuova variabile di globale specificandone che è una lista "useState([])"


  function startAddGoal() {
    valueInvisible(true);
  }

  function endAddGoal() {
    valueInvisible(false);
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.container}>
        <Button
          title='Aggiungi nella lista'
          onPress={startAddGoal}
          color="red" />
        <TextGoalInput
          closeVisibility={endAddGoal}
          visible={modaleInvisible}
          // visibleVa={valueInvisible}
          setVal={setValueGoals} />
        <View
          style={styles.goalsContainer}>
          <FlatComp
            list={listGoals}
            val={setValueGoals} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    marginTop: 20,
    flex: 10,
  }
});


{/* <ScrollView>
          Per poter stampare la lista, bisogna usare il metodo "map" specificandone il nomeLambda dove come esecuzione ci saranno label <Text> con "key"( Obbligatoria e magari con un numero random ) e valore dichiarato 
          {listGoals.map((goal) =>
            <View style={styles.singleGoalView} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>)}
        </ScrollView>*/}