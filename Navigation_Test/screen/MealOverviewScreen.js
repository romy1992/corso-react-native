import { Text, View } from "react-native";
import { useLayoutEffect } from "react";

function MealOverviewScreen({ route, navigation }) {

    const meal = route.params.meal;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title
        })
    }, [meal, navigation])


    return (
        <View>
            <Text>
                {meal.title}
            </Text>
        </View>
    );
}

export default MealOverviewScreen;