import { StyleSheet, TextInput } from "react-native";

function InputText(props) {
    return (
        <TextInput
            onChangeText={props.check}
            style={styles.textInput}
            placeholder={props.plac}
            // value={props.value}
        />
    )
}

export default InputText;

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
})