import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native';

function OutputGoal(props) {

    return (
        <Pressable
            onPress={props.delete.bind(this, props.id)}
            style={styles.container}>
            <Text
                style={styles.textList}>{props.container}
            </Text>
        </Pressable>
    );
}

export default OutputGoal;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 6
    },
    textFlat: {
        width: '100%',
    },
    textList: {
        flex: 1,
        marginTop: 10,
        padding: 5,
        backgroundColor: 'gray',
        textAlign: 'center',
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});