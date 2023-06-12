import { FlatList } from "react-native";
import { CATEGORIES } from "../../3 - Navigation/data/dummy-data";
import MealScreen from "./MealScreen";

function CategoryScreen({ navigation }) {

    function handlerMeal(itemData) {

        const item = itemData.item;

        function navigateMeal() {
            navigation.navigate('Meal',
                {
                    meal: item
                });
        }

        const mealProprierties = {
            id: item.id,
            title: item.title,
            image: item.image,
            onPress: navigateMeal
        }

        return <MealScreen {...mealProprierties} />;

    }

    return (
        <FlatList data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={handlerMeal}
        />
    );
}

export default CategoryScreen;