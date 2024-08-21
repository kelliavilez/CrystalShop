import { StyleSheet, Text, View } from "react-native";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

function HomeScreen() {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headingStyle}>GreenMarket</Text>
            <Text style={styles.textStyle}>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyele: {
        fontSize: 28,
        color: 'black',
    },
    headingStyle: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
    }
});

export default HomeScreen;