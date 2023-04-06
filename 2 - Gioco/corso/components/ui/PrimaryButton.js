import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";

// {children} è una proprietà per recuperare il valore nei tag dei component
// {OnPress} è una proprietà per il Press sul component 
function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOut}>
            <Pressable android_ripple={{ color: '#640233' }}
                style={({ pressed }) =>
                    pressed ?
                        [styles.press, styles.buttonIn] :
                        styles.buttonIn}
                onPress={onPress}
            >
                <Text style={styles.textInput}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOut: {
        backgroundColor: Colors.colorButton,
        margin: 4,
        borderRadius: 28,
        borderColor: Colors.borderButton,
        borderWidth: 1,
        overflow: "hidden",
        width: 140
    },
    buttonIn: {
        paddingHorizontal: 8,
        paddingVertical: 16,
        elevation: 2
    },
    textInput: {
        textAlign: 'center',
        color: 'white'
    },
    press: {
        opacity: 0.5,
        borderColor: Colors.pressButton,
    }
});