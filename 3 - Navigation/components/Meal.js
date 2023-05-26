import { View, Text, Image, Pressable, StyleSheet } from "react-native";

function Meal({ title, imageUrl, duration, complexity, affordability }) {

    function hendlerDetail(){
        
    }



    return (
        <View style={styles.container}>
            <Pressable android_ripple={{ color: '#351401' }}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>

    );
}

const styles = StyleSheet.create(
    {
        container: {
            borderWidth: 1,
            borderColor: 'gray',
            elevation: 4,
            margin: 10,
            borderRadius: 8,
            backgroundColor: 'white'
        },
        innerContainer: {
            overflow: 'hidden',
            borderRadius: 8,
        },
        image: {
            width: '100%',
            height: 200
        },
        detail: {
            marginTop: 3,
            flexDirection: "row",
            justifyContent: "center",
            padding: 8
        },
        title: {
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center"
        },
        detailItem: {
            fontSize: 12,
            fontWeight: "bold",
            marginHorizontal: 4
        }
    }
);

export default Meal;