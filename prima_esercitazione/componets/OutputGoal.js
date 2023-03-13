import { FlatList, StyleSheet, View, Text } from 'react-native';

function OutputGoal(props) {

    return (
        <View>
            <FlatList
                data={props.container}
                renderItem={(item) => {
                    return <Text>{item.item.pippo}</Text>
                }}
            />
        </View>
    );
}

export default OutputGoal;


const styles = StyleSheet.create({

});