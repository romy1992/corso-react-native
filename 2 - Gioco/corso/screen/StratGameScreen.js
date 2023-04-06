import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

function StratGameScreen({ onPickNumber }) {// richiama il valore passato 
    const [number, setNumber] = useState('');

    function textValueNumber(numberValue) {
        setNumber(numberValue);
    }

    function resetNumer() {
        setNumber('')
    }

    function confirmNumber() {
        const chosenNumber = parseInt(number);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            console.log("STOP")
            Alert.alert(
                'Numero non valido!',
                'Il numero deve essere compreso tra 1 e 99',
                [{ text: 'Ok', style: 'destructive', onPress: resetNumer }]
            );
        }

        onPickNumber(chosenNumber); // lo associa alla funzione
    }


    return (
        <View style={styles.container}>
            <InstructionText>Indovina il numero</InstructionText>
            <Card>
                <InstructionText style={styles.marginText}>inserisci il numero</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"//esempio per maiuscole
                    autoCorrect={false}// esempio 
                    onChangeText={textValueNumber}
                    value={number}
                />
                <View style={styles.contentButtons}>
                    <View style={styles.contentButton}>
                        <PrimaryButton onPress={resetNumer}>Cancella</PrimaryButton>
                    </View>
                    <View style={styles.contentButton}>
                        <PrimaryButton onPress={confirmNumber}>Conferma</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StratGameScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: "center",
        flex: 1
    },
    marginText: {
        marginBottom: 12
    },
    numberInput: {
        textAlign: 'center',
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.primaryYellow,
        borderBottomWidth: 2,
        color: Colors.primaryYellow,
        marginVertical: 8,
        fontWeight: 'bold'
    },
    contentButtons: {
        flexDirection: 'row'
    },
    contentButton: {
        flex: '1'
    }
});