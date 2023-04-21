import { StyleSheet, Text, View } from "react-native";
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';

function SelectedDate({ setSelectedDate }) {

    return (
        <View style={styles.containerBirth}>
            <Text>Giorno di nascita</Text>
            <View style={styles.containerBirth}>
                <DatePicker
                    options={{
                        // defaultFont: 'Shabnam-Light',
                        // headerFont: 'Shabnam-Medium',
                        backgroundColor: 'green',
                        textHeaderColor: '#FFA25B',
                        textDefaultColor: '#F6E7C1',
                        selectedTextColor: '#fff',
                        mainColor: '#F4722B',
                        textSecondaryColor: '#D6C7A1',
                        borderColor: 'gray',
                    }}
                    onSelectedChange={data => setSelectedDate(data)}
                    // current="2020-07-13"
                    selected={getFormatedDate(new Date(), 'YYYY/MM/DD')}
                    mode="calendar"
                    minuteInterval={30}
                    style={{ borderRadius: 10 }}
                />
            </View>
        </View>
    )
}

export default SelectedDate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    containerBirth: {
        width: '90%',
        alignItems: 'center',
        marginTop: 10,
    },
})


