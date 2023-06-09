import { FlatList, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../components/Meal";
import { useLayoutEffect } from "react";
// import { useRoute } from "@react-navigation/native";

function MealsOverview({ route, navigation }) {
    // hook:
    //const route = useRoute(); // metodo alternativo
    // route.params
    // const ob = route.params.obj;

    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((meals) => {
        return meals.categoryIds.indexOf(catId) >= 0;
    });

    // Uguale a useEffect ma carica prima i layout :
    // usato raramente, serve per casi come caricamento titolo della pagima veloce come questo caso
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle
        });

    }, [catId, navigation])


    function handelerMeals(itemData) {

        const item = itemData.item;

        // Modalità per passare i parametri da un componente all'altro
        const mealPropreties = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }

        return <Meal {...mealPropreties} />// Aggangiandoli cosi
    }

    return (
        <View>
            <FlatList data={displayMeals}
                keyExtractor={(item) => item.id}
                renderItem={handelerMeals} />{/**Ordina in quel metodo tutti i pasti con le proprietà */}
        </View>
    );

}

export default MealsOverview;