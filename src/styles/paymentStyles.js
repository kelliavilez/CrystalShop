import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'left',
        paddingHorizontal: 20,
        backgroundColor: '#1E1F21',
        marginBottom: 10,
    },
    productImage: {
        width: 100,  
        height: 100,
        borderRadius: 8,
        marginRight: 10, 
    },
    card: {
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
        marginTop: 20,
    },
    cardContent: {
        backgroundColor: '#FFFFFF',
    },
    cardContent2: {
        backgroundColor: '#FFFFFF',
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
        alignItems: 'stretch',
        color:'white'
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
    textInput: {
        width: 350,
        marginBottom: 16,
        backgroundColor: '#e1f1dd',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
        maxHeight: '80%', 
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#89c07a', 
    },
    input: {
        height: 40,
        borderColor: '#89c07a',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: '#000',
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 10,
        borderColor: '#89c07a', 
        borderWidth: 1,
        borderRadius: 5,
    },
    pickerContainer: { 
        borderColor: '#89c07a',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    modalButton: {
        marginTop: 10,
        backgroundColor: '#89c07a', 
    },
    cancelButtonText: { 
        color: '#89c07a',
        textAlign: 'center',
        fontSize: 16,
    },

})

export default styles;