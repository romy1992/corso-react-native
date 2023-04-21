import { Pressable, StyleSheet, Text, View } from "react-native";

function ActionButton({ pressButton, title }) {
    return (
        <View style={styles.buttonOut}>
            <Pressable onPress={pressButton}>
                <Text style={styles.textInput}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default ActionButton;

const styles = StyleSheet.create({
    buttonOut: {
        backgroundColor: '#00E200',
        margin: 5,
        borderRadius: 28,
        borderWidth: 1,
        borderColor: 'white',
        overflow: "hidden",
        width: '90%',
        height: 40
    },
    textInput: {
        marginTop: 5,
        justifyContent: 'center',
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
});