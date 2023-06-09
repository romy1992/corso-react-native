import { Button, Image, StyleSheet, Text, View } from "react-native";
import MealDetail from "../components/MealDetail";
import { MEALS } from "../data/dummy-data";
import SubTitle from "../components/SubTitle";
import List from "../components/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function DetailMealScreen({ route, navigation }) {

    const id = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === id);

    function headerPressButtonHandler() {
        console.log("Ciao")
    }

    // headerRight ha funzionalità per settare header lato destro della schermata in maniera totalmente custom
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton name="star" color="white" onPress={headerPressButtonHandler} />
            }
        })
    })

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetail
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                text={styles.textColor}
            />
            <View>
                <SubTitle>Ingredienti</SubTitle>
                <List data={selectedMeal.ingredients} />
                <SubTitle>Steps</SubTitle>
                <List data={selectedMeal.steps} />
            </View>
        </View>
    );
}

export default DetailMealScreen;

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 8
    },
    text: {
        color: "white"
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'bold'
    },
    textColor: {
        color: 'white'
    }
});