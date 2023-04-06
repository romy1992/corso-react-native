import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import Title from "./Title";
import PrimaryButton from "./PrimaryButton";
import InstructionText from "./InstructionText";

function GameOverScreen({ userNumber, numberRound, startNewGame }) {
    return (
        <View>
            <Title>GAME OVER!</Title>
            <View style={styles.contentImage}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/success.png')} />
            </View>
            <View style={styles.contentResult}>
                <InstructionText>Hai impiegato {numberRound} rounds per trovare il numero {userNumber}</InstructionText>
                <PrimaryButton onPress={startNewGame}>Ricomincia</PrimaryButton>
            </View>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    contentImage: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.borderButton,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    contentResult: {
        textAlign: "center",
        alignItems: "center"
    }
});