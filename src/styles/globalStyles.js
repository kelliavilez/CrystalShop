import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5', // Fondo claro para toda la pantalla
    },
        /*container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'grey',
        borderRadius: 10,
        shadowColor: '#000',
        textShadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },*/
    /*infoContainer: {
        marginBottom: 10,
    },*/
    card: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#7979',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        elevation: 5 
    },
    title: {
        fontSize: 20,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#100f0f'
    },
    button: {
        color: '#000'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        margin: 25,
        padding: 10
    }
    /*text: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'System',
        color: '#100f0f',
        marginBottom: 5
    },*/
    /*button: {
        backgroundColor: '#ffe333',
        fontSize: 25
    }*/
});

export default styles;