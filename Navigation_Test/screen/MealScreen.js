import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function MealScreen({ id, title, image, onPress }) {
    return (
        <View>
            <Pressable onPress={onPress}>
                <View>
                    <Image style={styles.image} source={{ uri: image }} />
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 80
    }
})
