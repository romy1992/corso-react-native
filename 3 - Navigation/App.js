import { NavigationContainer } from '@react-navigation/native'; // Installare i pacchetti con : "npm install @react-navigation/native" E "npx expo install react-native-screens react-native-safe-area-context"
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //Installare il pacchetto con :  "expo install @react-navigation/native-stack"
import { StatusBar, StyleSheet } from 'react-native';
import CategoriesScreen from './screeens/CategoriesScreen';
import DetailMealScreen from './screeens/DetailMealScreen';
import MealsOverview from './screeens/MealsOverview';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screeens/FavoriteScreen';

const Stack = createNativeStackNavigator();// dopo averlo installato creare questo Stak
const Drawer = createDrawerNavigator();

// Navigator annidato per menu laterale
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' }
      }}>
      <Drawer.Screen name='Categorie' component={CategoriesScreen} />
      <Drawer.Screen name='Preferiti' component={FavoriteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        {/*Wrappato dentro Il NavigatorContainer, questo Tag (<Stack.Navigator>) dovrà fare da contenitore riferendosi allo Stak sopra indicato */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
          {/*Dopodichè aprire il tag dello screen e inserirsci il nome (se si vuole) e il componente a cui fare riferimento */}
          <Stack.Screen name='Drawer'
            //il component è una Funzione di un componente annidato
            component={DrawerNavigator}
            options={{
              // toglie la doppia HEADER presente sopra
              headerShown: false
            }} />
          <Stack.Screen name='MealsOverview' component={MealsOverview} />
          <Stack.Screen name='DetailMeal' component={DetailMealScreen} />
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
