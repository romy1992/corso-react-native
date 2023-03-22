import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

function GoalInput(props) {

    function setItem(value) {
        props.value(value)
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInputStyle}
                placeholder='Inserisci'
                onChangeText={setItem}
                value={props.goal}
            ></TextInput>
            <Button title='Inserisci' onPress={props.added} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputStyle: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginRight: 5
    }
});