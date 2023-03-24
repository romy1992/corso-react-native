import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StratGameScreen() {
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

    }


    return (
        <View style={styles.container}>
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
        </View>
    )
}

export default StratGameScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#72063c',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        elevation: 8,// solo per Android
        // shadow... per IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 1
    },
    numberInput: {
        textAlign: 'center',
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
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