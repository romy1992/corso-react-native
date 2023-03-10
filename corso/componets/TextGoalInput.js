import { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default function TextGoalInput(props) {

    const [goalText, textGoal] = useState('');

    function inputChange(inputText) { // Una volta inserito il valore TextInput , onChangeText passerà il valore alla funzione iserita..In questo caso la variabile di stato viene settato nel textGoal
        textGoal(inputText);
    }


    function pressInput() {
        // console.log(goalText); => Una volta settato in valore in "text" , con la funzione "onPress" stampa il valore della nome della variabile...In questo caso "goalText"
        if (goalText === '')
            return alert("Non può può essere vuoto");

        // Setto in valore di quella lista "setValueGoals" concatendandone(...nomeValoreLambda) il valore dell'inputText("text" della prima variabile di stato con nome variabile "goalText")
        props.setVal((valueGoal) => [
            ...valueGoal, { text: goalText, id: Math.random().toString() },//"text" e "key" sono valori necessari per le liste..
            //"text" => un nome a caso per recuperare il valore
            //"key"(o altro) => nome STANDARD..in caso di modifica con nome custome vedere nella FLATLIST la proprietà keyExtractor
        ]);

        textGoal('');

    }

    return (
        <View style={styles.contentInput}>
            <TextInput style={styles.textInput} placeholder="Inserisci qualcosa"
                onChangeText={inputChange}
                value={goalText}
            />
            <Button title="Aggiungi" onPress={pressInput} />
        </View>
    );
}

// export default TextInput;

const styles = StyleSheet.create({
    contentInput: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccccc'
    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 10,
        padding: 8
    },
});