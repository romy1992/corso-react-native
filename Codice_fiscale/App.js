import { StyleSheet, View } from 'react-native';
import Form from './components/Form';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title>Calcola il tuo codice fiscale</Title>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
