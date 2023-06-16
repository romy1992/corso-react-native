import { Pressable, StyleSheet, Text, View } from "react-native";

function MealScreen({ color, title, onPress }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        elevation: 4,
        margin: 10,
        borderRadius: 8
    },
    innerContainer: {
        overflow: 'hidden',
        borderRadius: 8,
        textAlign: 'center',
        height: 80,
        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        color: 'white'
    }
})
