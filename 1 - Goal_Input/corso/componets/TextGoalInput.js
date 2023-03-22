import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, Image } from 'react-native';

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

        console.log(goalText)

        props.closeVisibility();
    }

    // function endAddGoal() {
    //     props.visibleVa(false)
    // }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.contentInput}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/goal.png')}
                />
                <TextInput style={styles.textInput} placeholder="Inserisci qualcosa"
                    onChangeText={inputChange}
                    value={goalText}
                />
                <View style={styles.buttonConteiner}>
                    <View
                        style={styles.button} >
                        <Button
                            title="Aggiungi"
                            onPress={pressInput} />
                    </View>
                    <View
                        style={styles.button} >
                        <Button
                            title="Cancella"
                            onPress={props.closeVisibility}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

// export default TextInput;

const styles = StyleSheet.create({
    contentInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
        color: 'white',
        marginTop: 5
    },
    buttonConteiner: {
        marginTop: 10,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100
    }
});