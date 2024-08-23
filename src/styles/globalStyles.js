import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f7fef4',
      },
    header: {
        marginVertical: 38,
        marginHorizontal:20,
        marginTop:25,
        paddingTop:10,
    },
    imagenLog: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 40,
        borderRadius: 150,
    },
    link:{
        fontSize: 16,
        fontWeight: '150',
        color: '#89c07a',
        marginBottom: 1,
        textAlign: 'left',
    },

    titleLog: {
        fontSize: 30,
        fontWeight: '800',
        color: '#333333',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitleLog: {
        fontSize: 13,
        fontWeight: '150',
        color: '#333333',
        marginBottom: 10,
        textAlign: 'left',

    },
    textInput: {
        width: 350,
        marginBottom: 16,
        backgroundColor: '#e1f1dd'
    },
    textInputHeaderHome: {
        height: 57,
        width: 320,
        backgroundColor: '#e1f1dd'
    },
    buttonLog: {
        paddingVertical: 5,
        marginBottom: 80
    },
    titleSign: {
        textAlign: 'center',
        fontSize: 25,
        color: 'black',
        marginBottom: 10,
        fontWeight: 'bold',
    },

    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center', 
        marginBottom: 1, 
      },

    card: {
        padding: 1,
        margin: 5,
        elevation: 2,
        width: 180,
        height: 220,
        backgroundColor: '#78a98c'
    },
    textLog: {
        fontSize: 17,
        fontWeight: 16,
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 50
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#100f0f'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        margin: 25,
        padding: 10
    },
    optionMenu: {
        marginTop: 20,
      },
    optionButtonMenu: {
        marginVertical: 5,
        borderColor: '#89c07a',
        borderWidth: 1,
    },
    MessageHelpSupport: {
        width: 285
    },
    cardCategory: {
        padding: 15,
        margin: 5,
        width: 70,
        height: 70,
        backgroundColor: '#78a98c',
        borderRadius: 50,
        marginBottom: 130,
        marginHorizontal: 20
    },
    categoryPhoto:{
        width: 60,
        height: 60,
        borderRadius: 50,
        
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'System',
        color: '#100f0f',
        marginBottom: 5
    }
    /*button: {
        backgroundColor: '#ffe333',
        fontSize: 25
    }*/
});

export default styles;