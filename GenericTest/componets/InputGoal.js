import { StyleSheet, TextInput } from "react-native";

function InputGoal({ inputValue, setInputValue }) {

    function setValueInput(valueInput) {
        setInputValue(valueInput)
    }

    return (
        <TextInput style={styles.textInput}
            placeholder='Inserisci'
            onChangeText={setValueInput}
            value={inputValue} />
    )
}

export default InputGoal;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
        padding: 7,
        borderRadius: 2
    }
});