import { StyleSheet, Text } from "react-native";

function InstructionText({ children, style }) {
    return (
        <Text style={[styles.containerInput, style]}>{children}</Text>
    )
}


export default InstructionText;

const styles = StyleSheet.create({
    containerInput: {
        color: 'white'
    }
});

