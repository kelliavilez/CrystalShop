import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    status: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#00C3FF', 
        marginBottom: 5,
    },
    container: {
        flex: 1,
        alignItems: 'flex-start', // 'left' no es válido en React Native, usa 'flex-start'
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        borderWidth: 1, // Grosor del borde
        borderColor: '#000000', // Color negro del borde
        borderRadius: 30, // Opcional, si quieres esquinas redondeadas
    },
    infoContainer: {
        height: 100,
        justifyContent: 'center',
    },
    photoCard: {
        width: 100,
        height: '100%',
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 30,
        marginTop: 10
    },

    container2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 15,
    },
    card: {
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
        marginTop: 20,
    },
    cardContent: {
        backgroundColor: 'white',
    },
    cardContent2: {
        backgroundColor: 'white',
        marginBottom: 1,
        marginTop: 1,

    },
    button: {
        padding: 3,
        backgroundColor: '#FF7F00',
        borderRadius: 30,
        marginBottom: 1,
        height: 50,
        marginTop: 10
    },
    text: {
        color: 'green',
        fontSize: 10,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 65,
        height: 65,
        marginRight: 50,
        borderRadius: 2,
        borderColor: 'green',

    },
    totalContainer: {
        paddingVertical: 20,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#ccc',
        marginBottom: 10,
    },

    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'stretch'
    },
    totalContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    descriptionText: {
        fontSize: 13,
        width: 250
    }

})

export default styles;