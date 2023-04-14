import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/Title';
import Form from './components/Form';

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
    backgroundColor: 'gray',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  containerForm: {
    backgroundColor: 'white',
    height: 40,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
