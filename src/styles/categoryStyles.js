import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        borderRadius: 75,
        width: 150,
        height: 150,
        alignSelf: 'center',
        backgroundColor: '#FF7F00'
    },
    textContainer: {
        width: 100,
        justifyContent: 'left'
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#1E1F21',
        width: 384
    },
    photo: {
        borderRadius: 75,
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 5
    }
});

export default styles;