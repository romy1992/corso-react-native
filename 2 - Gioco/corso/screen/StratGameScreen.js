import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StratGameScreen() {
    return (
        <View style={styles.container}>
            <TextInput />
            <PrimaryButton>Cancella</PrimaryButton>
            <PrimaryButton>Conferma</PrimaryButton>
        </View>
    )
}

export default StratGameScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#72063c',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        elevation: 8,// solo per Android
        // shadow... per IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 1
    },
});