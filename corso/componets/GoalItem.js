import { View, Text, StyleSheet, Pressable } from 'react-native';

// creo un nuovo componente in questo modo
function GoalItem(props) {//(props = accesso alle proprietà che mi vengono passate dall'altra parte)
    return (//Il solito return
        <Pressable onPress={props.onDeleteGoal}>
            <View style={styles.singleGoalView}>
                <Text style={styles.goalText}>{props.text}</Text>{/* "props" richiamo per accesso alle proprietà .... "text" nome con lui dell'altra parte è stato dichiarato il nome della proprietà */}
            </View>
        </Pressable>
    );
}

// lo esporto in questo modo
export default GoalItem;


const styles = StyleSheet.create({
    singleGoalView: {
        padding: 4,
        borderRadius: 5,
        backgroundColor: 'blue',
        marginTop: 10
    },
    goalText: {
        color: 'white'
    }
});