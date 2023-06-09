import { StyleSheet, Text, View } from "react-native";

function MealDetail({ duration, complexity, affordability, text }) {
    return (
        <View style={styles.detail}>
            <Text style={[styles.detailItem, text]}>{duration}</Text>
            <Text style={[styles.detailItem, text]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, text]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

export default MealDetail;

const styles = StyleSheet.create({
    detail: {
        marginTop: 3,
        flexDirection: "row",
        justifyContent: "center",
        padding: 8
    },
    detailItem: {
        fontSize: 12,
        fontWeight: "bold",
        marginHorizontal: 4
    }
});