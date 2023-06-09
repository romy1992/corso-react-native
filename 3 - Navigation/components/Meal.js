import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetail from "./MealDetail";

function Meal({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation();

    // Funzione per i dettagli dopo onPress
    function selectDetailHandler() {
        navigation.navigate('DetailMeal',
            {
                mealId: id
            });
    }

    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{ color: '#351401' }}
                onPress={selectDetailHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetail
                        duration={duration}
                        affordability={affordability}
                        complexity={complexity} />
                </View>
            </Pressable>
        </View>

    );
}

const styles = StyleSheet.create(
    {
        container: {
            borderWidth: 1,
            borderColor: 'gray',
            elevation: 4,
            margin: 10,
            borderRadius: 8,
            backgroundColor: 'white'
        },
        innerContainer: {
            overflow: 'hidden',
            borderRadius: 8,
        },
        image: {
            width: '100%',
            height: 200
        },
        title: {
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center"
        }
    }
);

export default Meal;