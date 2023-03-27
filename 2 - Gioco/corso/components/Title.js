import { StyleSheet, Text } from "react-native";

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        color: '#ddb52f',
        padding: 10,
        borderColor: '#ddb52f',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: "center",
        fontWeight: "bold"
    }
});