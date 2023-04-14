import { StyleSheet, Text, View } from 'react-native';

function Title({ children }) {
    return (
        <View>
            <Text style={styles.container}>{children}</Text>
        </View>
    );
}


export default Title;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00E000',
        fontSize: 25,
        color: 'white',
        padding: 5,
        textAlign:'center',
        alignItems: 'center'
    }
});

