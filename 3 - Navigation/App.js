import { StatusBar, StyleSheet } from 'react-native';
import CategoriesScreen from './screeens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';// Installare i pacchetti con : "npm install @react-navigation/native" E "npx expo install react-native-screens react-native-safe-area-context"
import { createNativeStackNavigator } from '@react-navigation/native-stack';//Installare il pacchetto con :  "expo install @react-navigation/native-stack"
import MealsOverview from './components/MealsOverview';

export default function App() {

  const Stack = createNativeStackNavigator();// dopo averlo installato creare questo Stak

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        {/*Wrappato dentro Il NavigatorContainer, questo Tag (<Stack.Navigator>) dovrà fare da contenitore riferendosi allo Stak sopra indicato */}
        <Stack.Navigator initialRouteName="CategorieCibo"
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
          {/*Dopodichè aprire il tag dello screen e inserirsci il nome (se si vuole) e il componente a cui fare riferimento */}
          <Stack.Screen name='CategorieCibo' component={CategoriesScreen}
            options={{ title: 'Tutte le categorie' }} />
          <Stack.Screen name='MealsOverview' component={MealsOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
