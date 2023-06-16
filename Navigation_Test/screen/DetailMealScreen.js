import { Text } from "react-native";
import { useLayoutEffect } from "react";

function DetailMealScreen({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Text>Ciao</Text>
        });
    });

    return (
        <Text>Ciao</Text>
    );
}

export default DetailMealScreen;