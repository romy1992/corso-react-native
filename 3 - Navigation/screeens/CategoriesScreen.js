import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function CategoriesScreen({ navigation }) {// {navigation} => è il nome della proprietà standard che servirà per essere iniettata nei componenti

    function renderCategotyItem(itemData) {

        function pressHandler() {
            navigation.navigate('MealsOverview', // function nella function : con il ".navigate('nome del name inserito nello Stak.screen') darà modo di navigare negli screen indicati"
                // con questo modo passiamo i dati da un componente all'altro    
                {
                    categoryId: itemData.item.id,
                    obj: itemData.item
                });
        }

        return <CategoryGridTitle
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler} // questo onPress attiverà il navigate dell'oggetto indicato
        />;
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategotyItem}// chiama questo metodo passando implicitamnete l'itemdata come paramentro ritornando la CategoryGridTitle con i parametri
            numColumns={2}
        />
    )
}

export default CategoriesScreen;