import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'left',
        backgroundColor: '#f7fef4',
        marginBottom: 10,
    },
    infoContainer: {
        height: 100,
        justifyContent: 'center',
    },

    container2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'flex-end',
        marginTop: 10,
        marginBottom:15,
    },
    card: {
        backgroundColor: 'white',
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
        backgroundColor: '#89c07a',
        borderRadius: 2,
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

})

export default styles;