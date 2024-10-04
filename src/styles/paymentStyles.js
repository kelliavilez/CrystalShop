import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'left',
        paddingHorizontal: 20,
        backgroundColor: '#f7fef4',
        marginBottom: 10,
    },
    productImage: {
        width: 100,  
        height: 100,
        borderRadius: 8,
        marginRight: 10, 
    },
    card: {
        backgroundColor: '#96b89c',
        marginBottom: 15,
        marginTop: 20,
    },
    cardContent: {
        backgroundColor: '#96b89c',
    },
    cardContent2: {
        backgroundColor: '#96b89c',
        marginBottom: 5,
        marginTop: 10,
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
        padding: 5, 
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
        alignItems: 'stretch'
    },
    totalContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        width: 200, 
        marginBottom: 5,
    },

})

export default styles;