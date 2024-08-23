import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'left',
        paddingHorizontal: 20,
        backgroundColor: '#f7fef4',
        marginBottom: 10,
    },

    container2: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: 'white',
        marginBottom:15,
        marginTop:20,
    },
    cardContent: {
        backgroundColor: 'white',
    },
    cardContent2:{
        backgroundColor: 'white',
        marginBottom:5,
        marginTop:10,

    },
    button: {
        padding: 3,
        backgroundColor: '#89c07a',
        borderRadius: 2,
    },
    buttonText: {
        color: 'white',
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
        width: 50,
        height: 50,
        marginRight: 10,
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
        alignItems:'stretch'
    },
    totalContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})

export default styles;