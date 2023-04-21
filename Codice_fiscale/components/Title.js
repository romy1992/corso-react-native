import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function Title({ children }) {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.container}>{children}</Text>
            </View>
        </SafeAreaView>
    );
}


export default Title;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#00E000',
        fontSize: 25,
        color: 'white',
        padding: 5,
        textAlign: 'center',
        alignItems: 'center'
    }
});

