import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, View } from 'react-native';
import StratGameScreen from './screen/StratGameScreen';

export default function App() {
  return (
    // <LinearGradient // bisogna installare la libreria "npm o expo install expo-linear-gradient"
    //   colors={['#4e0329', '#ddb52f']}// effetto misto colori sullo sfondo
    //   style={styles.container}>
    <ImageBackground
      source={require('./assets/images/background.png')}
      resizeMode='cover'
      style={styles.container}
      imageStyle={styles.imageStyle}
    >
      <StratGameScreen />
    </ImageBackground>
    //</LinearGradient>
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
