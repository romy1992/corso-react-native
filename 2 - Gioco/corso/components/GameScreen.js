import { StyleSheet, Text, View } from "react-native";
import Title from "./Title";

function GameScreen() {
    return (
        <View style={styles.container}>
            <Title>Indovina il numero!</Title>
        </View>
    );
}

export default GameScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    }
});