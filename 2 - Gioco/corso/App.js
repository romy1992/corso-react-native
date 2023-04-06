import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import GameOverScreen from './components/ui/GameOverScreen';
import GameScreen from './components/ui/GameScreen';
import Colors from './constants/Colors';
import StratGameScreen from './screen/StratGameScreen';

export default function App() {

  const [userNumber, setNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [gameRounds, setRounds] = useState(0);

  // Variabile di componente con passaggio di parametri 
  let screen = <StratGameScreen onPickNumber={setNumberHander} />

  function setNumberHander(pickNumber) {
    setNumber(pickNumber);
    setGameOver(false);
  }

  function setGameOberHandler() {
    setGameOver(true);
  }

  function newGameHandler() {
    setNumber(null);
    setRounds(0);
  }

  // Se il numero è definito cambia screen
  if (userNumber) {
    screen = <GameScreen
      useNumber={userNumber}
      gameOverState={setGameOberHandler}
      numberRound={setRounds}
    />
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen
      userNumber={userNumber}
      numberRound={gameRounds}
      startNewGame={newGameHandler}
    />
  }


  return (
    <LinearGradient // bisogna installare la libreria "npm o expo install expo-linear-gradient"
      colors={[Colors.primaryRed, Colors.primaryYellow]}// effetto misto colori sullo sfondo
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
