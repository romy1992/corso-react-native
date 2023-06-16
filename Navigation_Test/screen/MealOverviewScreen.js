import { FlatList, Text, View } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../../3 - Navigation/data/dummy-data";
import MealComponent from "../components/MealComponent";

function MealOverviewScreen({ route, navigation }) {

    const idCat = route.params.idCat;
    const title = route.params.title;

    const displayMeal = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(idCat) >= 0;
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            title: title
        })
    }, [displayMeal, navigation])

    function selectMeal(itemData) {
        const item = itemData.item;

        const propertiesMeal = {
            id: item.id,
            titleMeal: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }

        return <MealComponent {...propertiesMeal} />
    }


    return (
        <View>
            <FlatList
                data={displayMeal}
                keyExtractor={(item) => item.id}
                renderItem={selectMeal}
            />
        </View>
    );
}

export default MealOverviewScreen;