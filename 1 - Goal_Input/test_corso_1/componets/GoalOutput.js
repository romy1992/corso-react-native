import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalOutput(props) {

    function deleteGoal() {
        props.goalsValue(item => {
            return item.filter(i => i.id !== props.itemId)
        })
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={deleteGoal}>
                <Text>{props.itemValue}</Text>
            </Pressable>
        </View>
    );
}

export default GoalOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});