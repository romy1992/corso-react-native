import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './componets/GoalInput';
import GoalOutput from './componets/GoalOutput';

export default function App() {

  const [goalInput, valueInput] = useState('');

  const [listGoals, valueGoals] = useState([]);


  function addedGoals() {
    if (goalInput === '') {
      return alert('Non può essere vuoto.');
    }

    valueGoals((goal) => [
      ...goal, { text: goalInput, id: Math.random().toString() }
    ])

    valueInput('')

  }

  return (
    <View style={styles.container}>
      <GoalInput added={addedGoals}
        value={valueInput}
        goal={goalInput}
      />
      <FlatList
        data={listGoals}
        renderItem={itemData => {
          return <GoalOutput
            goalsValue={valueGoals}
            itemValue={itemData.item.text}
            itemId={itemData.item.id}
          />
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
