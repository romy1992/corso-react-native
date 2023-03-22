import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import InputGoal from './componets/InputGoal';
import OutputGoal from './componets/OutputGoal'

export default function App() {

  const [list, valueList] = useState([])

  function addedGoal(text, value) {
    if (text === '')
      return alert('Obbligatorio')

    valueList((valu) => [
      ...valu, { pippo: text, id: Math.random().toString() }
    ])

    value('')
  }


  function onDeleted(id) {
    valueList(
      (val) => {
        return val.filter((i) => i.id !== id);
      }
    );
  }


  return (
    <View style={styles.container}>

      <InputGoal added={addedGoal} />

      <FlatList style={styles.textFlat}
        data={list}
        renderItem={(item) => {
          return (
            <OutputGoal
              container={item.item.pippo}
              id={item.item.id}
              delete={onDeleted}
            />
          )
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
