import { FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../../3 - Navigation/data/dummy-data";
import MealScreen from "./MealScreen";

function CategoryScreen({ navigation }) {

    function handlerMeal(itemData) {

        const item = itemData.item;

        function navigateMeal() {
            navigation.navigate('Meal',
                {
                    idCat: item.id,
                    title: item.title,
                });
        }

        const mealProprierties = {
            color: item.color,
            title: item.title,
            onPress: navigateMeal
        }

        return <MealScreen {...mealProprierties} />;

    }

    return (
        <FlatList data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={handlerMeal}
            numColumns={2}

        />
    );
}

export default CategoryScreen;