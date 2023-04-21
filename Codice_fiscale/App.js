import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './components/Form';
import ResultCode from './components/ResultCode';
import Title from './components/Title';

export default function App() {

  const [isScreen, setScreen] = useState(true);
  const [code, setCode] = useState('');

  let screen = <Form isScreen={setScreen} code={setCode} />

  function setNewCode() {
    setScreen(true)
  }

  if (!isScreen)
    screen = <ResultCode code={code} screen={setNewCode} />

  return (
      <View style={styles.container}>
        <Title>Calcola il tuo codice fiscale</Title>
        {screen}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
