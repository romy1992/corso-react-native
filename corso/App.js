import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TextGoalInput from './componets/TextGoalInput';
import FlatComp from './componets/FlatComp';

export default function App() {
  
  const [listGoals, setValueGoals] = useState([]);// Crea una nuova variabile di globale specificandone che è una lista "useState([])"
  
  return ( 
    <View style={styles.container}>
      <TextGoalInput setVal={setValueGoals} />
      <View style={styles.goalsContainer}>
        <FlatComp list={listGoals} val={setValueGoals} />
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