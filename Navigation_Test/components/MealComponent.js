import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealComponent({ id, titleMeal, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation();

    function selectDetailHandler() {
        navigation.navigate('Detail', {
            mealId: id
        })
    }


    return (
        <Pressable onPress={selectDetailHandler}>
            <View>
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <Text>{titleMeal}</Text>
            </View>
        </Pressable>
    );
}

export default MealComponent;

const styles = StyleSheet.create(
    {
        image: {
            width: '100%',
            height: 200
        }
    }
);