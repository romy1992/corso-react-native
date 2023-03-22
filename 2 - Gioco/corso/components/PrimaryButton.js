import { View, Text, StyleSheet } from "react-native";

function PrimaryButton({ children }) {// {children} è una proprietà per recuperare il valore nei tag dei component
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({

});