import { useState } from "react";
import { StyleSheet, TextInput, View, Picker, Text, Button } from "react-native";


function Form() {
    const [selectedValue, setValue] = useState("Maschio");

    return (
        <View style={styles.containerForm}>
            <TextInput style={styles.textInput} placeholder="Cognome" />
            <TextInput style={styles.textInput} placeholder="Nome" />
            <Picker style={styles.pickerStyle}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
            >
                <Picker.Item label="Maschio" value="maschio" />
                <Picker.Item label="Femmina" value="femmina" />
            </Picker>
            <TextInput style={styles.textInput} placeholder="Luogo di nascita" />

            <TextInput style={styles.province} placeholder="Provincia" />
            <Text>Giorno di nascita</Text>

            <View style={styles.containerBirth}>
                <Picker style={styles.selectBirth}>
                    <Picker.Item label="1" value="1" />
                </Picker>
                <Picker style={styles.selectBirth}>
                    <Picker.Item label="1" value="1" />
                </Picker>
                <Picker style={styles.selectBirth}>
                    <Picker.Item label="1950" value="1950" />
                </Picker>
            </View>
            <View style={styles.buttonCalculate}>
                <Button
                    borderRadius={'15px'}
                    color={'#00E000'}
                    title="Calcola il codice fiscale" />
            </View>
        </View>
    );
}

export default Form;

const styles = StyleSheet.create({
    containerForm: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: 40,
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    textInput: {
        flexDirection: "column",
        // flex: 1,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "black",
        padding: 5,
        width: '80%',
        borderRadius: 5
    },
    province: {
        flexDirection: "column",
        marginTop: 10,
        borderWidth: 1,
        borderColor: "black",
        padding: 5,
        width: '20%',
        borderRadius: 5
    },
    pickerStyle: {
        marginTop: 10,
        width: '80%',
        padding: 5,
    },
    containerBirth: {
        alignItems: 'center',
        flexDirection: "row",
        marginTop: 10,
    },
    selectBirth: {
        marginRight: 10
    },
    buttonCalculate: {
        marginTop: 10,
    }
});