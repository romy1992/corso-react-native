import { useState } from 'react';
import { Button, View, StyleSheet, TextInput } from 'react-native';

function InputGoal(props) {

    const [text, value] = useState('');

    function changeText(valueText) {
        value(valueText);
    }

    function addedGoal() {
        if (text === '')
            return alert('Obbligatorio')

        props.container((valu) => [
            ...valu, { pippo: text, id: Math.random().toString() }
        ])

        value('')
    }


    return (
        <View style={styles.container}>
            <TextInput style={styles.text} placeholder='Inserisci qualcosa'
                onChangeText={changeText}
                value={text}
            />
            <Button style={styles.button} title='Aggiungi' onPress={addedGoal} />
        </View>
    );

}


export default InputGoal;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        padding: 8,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginRight: 10,
        width: '90%'
    },
    button: {
    }
});

