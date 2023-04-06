import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import NumberDevice from "../game/NumberDevice";
import Card from "./Card";
import InstructionText from "./InstructionText";
import PrimaryButton from "./PrimaryButton";
import Title from "./Title";

// Variabili "privati" di classe  
let minNumber = 1;
let maxNumber = 100;

// Metodi "privati" di classe  
function generaterdNumberRandom(min, max, excluded) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === excluded) {
        return generaterdNumberRandom(min, max, excluded)
    }
    else {
        return randomNumber;
    }
}

// { useNumber, gameOverState } => Parametri che vengono passati da altri componenti
function GameScreen({ useNumber, gameOverState, numberRound }) {

    const numberGenerated = generaterdNumberRandom(1, 100, useNumber);
    const [randomNmber, setNumber] = useState(numberGenerated);


    // UseEffect è responsabile del controllo delle variabili per controllare se ci siano cambiamenti
    // Viene eseguita dopo il componente
    useEffect(() => {
        if (randomNmber === useNumber) {
            gameOverState();
        }
    }, [randomNmber, useNumber, gameOverState]);

    useEffect(() => {
        minNumber = 1;
        maxNumber = 100;
    }, []);

    function nextNumber(direction) {

        if ((direction === 'minore' && randomNmber <= useNumber)
            || (direction === 'maggiore' && randomNmber >= useNumber)) {
            // Alert.alert("Non mentire", "Sai che non è corretto!!", [
            //     { text: 'Sorry!', style: 'cancel', onPress }
            // ]);
            alert("Non mentire")
            return;
        }

        console.log(minNumber + ' - ' + maxNumber)

        if (direction === 'minore') {
            maxNumber = randomNmber;
            numberRound = numberRound + 1;
        } else {
            minNumber = randomNmber + 1;
            numberRound = numberRound + 1;
        }

        let newRandomNumber = generaterdNumberRandom(minNumber, maxNumber, randomNmber);
        setNumber(newRandomNumber);
    }

    return (
        <View style={styles.container}>
            <Title>Indovina il numero!</Title>
            <NumberDevice>{randomNmber}</NumberDevice>
            <Card>
                <InstructionText>Maggiore o Minore ?</InstructionText>
                <View style={styles.containerButton}>
                    <PrimaryButton onPress={nextNumber.bind(this, 'minore')}>
                        <Ionicons name="md-remove" size={24} color='white'></Ionicons>
                    </PrimaryButton>
                    <PrimaryButton onPress={nextNumber.bind(this, 'maggiore')}>
                        <Ionicons name="md-add" size={24} color='white'></Ionicons>
                    </PrimaryButton>
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    containerButton: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
});