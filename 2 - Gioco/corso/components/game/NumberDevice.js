import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function NumberDevice({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textNumber}>{children}</Text>
        </View>
    );
}

export default NumberDevice;

const styles = StyleSheet.create({
    container: {
        textAlign:"center",
        marginTop: 20,
        padding: 10,
        borderColor: Colors.primaryYellow,
        borderRadius: 5,
        borderWidth: 2
    },
    textNumber: {
        fontSize: 24,
        color: Colors.primaryYellow,
        fontWeight: "bold"
    }
});