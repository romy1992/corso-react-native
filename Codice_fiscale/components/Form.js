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
        return setTextInputSurname(valueText);
    }

    function checkTextInputName(valueText) {
        return setTextInputName(valueText);
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


        let surname = subStringSurname(setValueText(textInputSurname));
        let name = subStringName(setValueText(textInputName));
        let date = selectedDate.substring(2, 4);
        let month = charMonth();
        let day = numDay();
        let codCity = getCodeCity();
        let codSecurity = 'B'; //TODO

        // Setta il codice
        code(surname + name + date + month + day + codCity + codSecurity);

        // Cambia lo screen dopo i controlli e il risultato del codice fiscale
        isScreen(false);
    }

    // Set value
    function setValueText(valueText) {
        valueText = valueText.trim().toUpperCase()
            .replaceAll("A", "")
            .replaceAll("E", "")
            .replaceAll("I", "")
            .replaceAll("O", "")
            .replaceAll("U", "");
        return valueText;
    }

    // SubString Surname 1-2-3 
    function subStringSurname(valueText) {
        valueText = valueText.replaceAll(' ', '').substring(0, 3);
        return valueText;
    }

    // SubString Name 1-3-4
    function subStringName(valueText) {
        let repl = valueText.replaceAll(' ', '');
        let first = repl.substring(0, 1);
        let total = first + repl.substring(2, 4);
        return total.trim();
    }

    // Carattere del mese
    function charMonth() {
        let num = selectedDate.substring(5, 7);
        if (num.startsWith(0))
            num = num.replace('0', '')
        switch (num) {
            case '1': return 'A'
            case '2': return 'B'
            case '3': return 'C'
            case '4': return 'D'
            case '5': return 'E'
            case '6': return 'H'
            case '7': return 'L'
            case '8': return 'M'
            case '9': return 'P'
            case '10': return 'R'
            case '11': return 'S'
            case '12': return 'T'
        }
    }

    // Giorno di nascita
    function numDay() {
        let day = selectedDate.substring(8, 10);
        // Se il sesso è femminile si aggiunge 40 al giorno di nascita
        if (selectedValue === 'femmina')
            day = day + 40;
        return day;
    }

    function getCodeCity() {
        if (textInputCity.toLocaleLowerCase() === 'manfredonia')
            return 'E885';
        return '1234'
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