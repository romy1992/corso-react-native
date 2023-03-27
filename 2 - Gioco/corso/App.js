import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import GameScreen from './components/GameScreen';
import StratGameScreen from './screen/StratGameScreen';

export default function App() {

  const [userNumber, setNumber] = useState();
  
  // Variabile di componente con passaggio di parametri 
  let screen = <StratGameScreen onPickNumber={setNumberHander} />

  function setNumberHander(pickNumber) {
    setNumber(pickNumber);
  }


  // Se il numero è definito cambia screen
  if (userNumber) {
    screen = <GameScreen />
  }


  return (
    <LinearGradient // bisogna installare la libreria "npm o expo install expo-linear-gradient"
      colors={['#4e0329', '#ddb52f']}// effetto misto colori sullo sfondo
      style={styles.container}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView>
          {/* Mostra lo screen indicato */}
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageStyle: {
    opacity: 0.4
  }
});
