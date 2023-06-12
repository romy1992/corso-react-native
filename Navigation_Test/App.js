import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet } from 'react-native';
import CategoryScreen from './screen/CategorySceen';
import FavoriteScreen from './screen/FavoriteScreen';
import MealOverviewScreen from './screen/MealOverviewScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Categorie' component={CategoryScreen} />
      <Drawer.Screen name='Favoriti' component={FavoriteScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name='Drawer'
            component={DrawerNavigator}
            options=
            {{
              headerShown: false
            }}
          />
          <Stack.Screen name='Meal' component={MealOverviewScreen} />
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
