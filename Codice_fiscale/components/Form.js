import { StyleSheet, TextInput, View, Picker } from "react-native";


function Form() {
    return (
        <View >
            <TextInput style={styles.textInput} placeholder="Cognome" />
            <TextInput style={styles.textInput} placeholder="Nome" />
            <Picker>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    );
}

export default Form;

const styles = StyleSheet.create({
    textInput: {
        flexDirection: "column",
        // flex: 1,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "black",
        padding: 5,
        width: '80%',
        borderRadius: 5

    }
});