import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

function Card({ children }) {
    return (
        <View style={styles.inputContainer}>{children}</View>
    );
}


const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
console.log(deviceWidth)
console.log(deviceHeight)

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryRedHard,
        marginTop: deviceWidth < 380 ? 17 : 36,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        elevation: 8,// solo per Android
        // shadow... per IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 1
    }
})

export default Card;