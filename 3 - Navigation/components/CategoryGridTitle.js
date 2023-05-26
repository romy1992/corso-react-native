import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";

function CategoryGridTitle({ title, color, onPress }) {
    // hook:
    //const navigate = useNavigation();// Questo è un metodo secondario per usare in navigate in quei momenti quando non c'è modo di utilizzare il primo metodo

    return (
        <View style={styles.viewContainer}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.pressable : null
                ]}
                onPress={onPress}
            >
                <View style={[styles.viewText, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        margin: 16,
        height: 150,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        borderRadius: 8,
        shadowOpacity: 0.25,
        shadowOffset: { with: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    pressable: {
        opacity: 0.5
    },
    viewText: {
        borderRadius: 8,
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default CategoryGridTitle;