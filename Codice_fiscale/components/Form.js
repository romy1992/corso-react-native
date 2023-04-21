import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ActionButton from "./ActionButton";
import InputText from "./InputText";
import SelectedDate from "./SelectedData";

function Form({ isScreen, code }) {

    // Varibili per il form
    const [selectedValue, setValue] = useState('');
    const [textInputSurname, setTextInputSurname] = useState('');
    const [textInputName, setTextInputName] = useState('');
    const [textInputCity, setTextInputCity] = useState('');
    const [textInputProvince, setTextInputProvince] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Funzioni di settaggio form
    function checkTextInputSurname(valueText) {
        valueText = setValueText(valueText);
        return setTextInputSurname(subStringSurname(valueText))
    }

    function checkTextInputName(valueText) {
        valueText = setValueText(valueText);
        console.log(valueText)
        // return setTextInputName(subStringName(valueText))
    }

    function checkTextInputCity(valueText) {
        return setTextInputCity(valueText)
    }

    function checkTextInputProvince(valueText) {
        return setTextInputProvince(valueText);
    }

    // Press bottone con check
    function pressButton() {
        if (textInputProvince === '' || textInputProvince.length != 2) {
            return alert('Errore provincia', 'La provincia deve contenere solo 2 caratteri',
                [{ text: 'Attenzione!', style: 'cancel' }])
        }
        if (textInputSurname.length === 0 || textInputName.length === 0 ||
            textInputCity.length === 0) {
            return alert('Errore inserimento', 'I campi non possono essere vuoti',
                [{ text: 'Attenzione!', style: 'cancel' }])
        }

        // Setta il codice
        code(textInputSurname + textInputName
            + selectedDate.substring(2, 4).toUpperCase());

        // Cambia lo screen dopo i controlli e il risultato del codice fiscale
        isScreen(false);
    }

    // Set value
    function setValueText(valueText) {
        valueText = valueText.trim().toUpperCase()
            .replace("A", "")
            .replace("E", "")
            .replace("I", "")
            .replace("O", "")
            .replace("U", "");
        return valueText;
    }

    // SubString Surname 1-2-3 
    function subStringSurname(valueText) {
        valueText = valueText.substring(0, 3);
        return valueText;
    }

    // SubString Name 1-3-4
    function subStringName(valueText) {
        let first = valueText.substring(0, 1);
        let total = first+valueText.trim().substring(3, 4);
        // console.log(total)
        return total;
    }

    return (
        <View style={styles.containerForm}>
            <InputText
                value={textInputSurname}
                check={checkTextInputSurname}
                plac={'Cognome'}
            />
            <InputText
                value={textInputName}
                check={checkTextInputName}
                plac={'Nome'}
            />

            <Picker style={styles.pickerStyle}
                selectedValue={selectedValue}
                onValueChange={itemValue => setValue(itemValue)}
            >
                <Picker.Item label="Maschio" value="maschio" />
                <Picker.Item label="Femmina" value="femmina" />
            </Picker>

            <InputText
                value={textInputCity}
                check={checkTextInputCity}
                plac={'Luogo di nascita'}
            />
            <InputText
                value={textInputProvince}
                check={checkTextInputProvince}
                plac={'Provincia (Sigla)'} />

            <SelectedDate setSelectedDate={setSelectedDate} />
            <ActionButton pressButton={pressButton} title={"Calcola codice fiscale"} />

        </View>
    );
}

export default Form;

const styles = StyleSheet.create({
    containerForm: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: 40,
        flex: 1
    },
    pickerStyle: {
        marginTop: 10,
        width: '80%',
        padding: 5,
        borderWidth: 1,
        backgroundColor: '#DCDCDC',
        color: 'black',
        borderRadius: 5
    }
});