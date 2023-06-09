import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
    return data.map(dataInput => (
        <View key={dataInput}>
            <Text style={styles.text}>{dataInput}</Text>
        </View>
    ));
}

export default List;


const styles = StyleSheet.create({
    text: {
        color: "white"
    }
});