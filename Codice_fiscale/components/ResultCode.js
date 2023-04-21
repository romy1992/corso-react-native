import { Text, View } from "react-native";
import ActionButton from "./ActionButton";

function ResultCode({ code, screen }) {

    return (
        <View>
            <Text>{code}</Text>
            <ActionButton
                pressButton={screen}
                title={'Calcola un nuovo codice'}
            />
        </View>
    )
}

export default ResultCode; 