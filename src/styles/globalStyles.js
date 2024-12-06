import { StyleSheet } from 'react-native';
/* #FF7F00 Naranjado
#1E1F21 Negro para fondo
#FFFFFF blanco
#00C3FF Azul* */
const styles = StyleSheet.create({
    validationMessage: {
        color: '#FF7F00',  // Aquí defines el color naranja directamente en el estilo
        fontSize: 14,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#1E1F21',
    },
    container2: {
        flex: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#1E1F21',
        marginLeft: -20,
        marginRight: -20,
        marginTop: -100

    },
    container3: {
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 50,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        height: 300,
        width: 350
    },
    container4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    pickerContainer: {
        backgroundColor: '#ffffff',
        borderWidth: 1.8,   // Borde del contenedor
        borderColor: '#1E1F21',
        width: 300,
        marginBottom: 16,
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderRadius: 20,
        borderTopLeftRadius: 20,  // Redondeo solo del borde inferior izquierdo
        borderTopRightRadius: 20,   // Espaciado interno vertical
        marginTop: 30
    },
    picker: {
        height: 34, // Altura del Picker
        width: '100%', // Asegura que ocupe todo el contenedor
    },
    header: {
        backgroundColor: '#1E1F21',
        marginVertical: 38,
        marginHorizontal: 20,
        marginTop: 0,
        marginLeft: -20,
        marginRight: -20,
    },
    imagenLog: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 40,
        borderRadius: 150,
        marginTop: 100
    },
    link: {
        fontSize: 16,
        fontWeight: '150',
        color: '#FF7F00',
        marginBottom: 1,
        textAlign: 'left',
    },
    titleContainer: {
        flexDirection: 'row', // Coloca los elementos en fila
        alignItems: 'center', // Alinea verticalmente los textos
    },
    titleLog: {
        fontSize: 30,
        fontWeight: '800',
        color: '#ffffff',
        marginBottom: 10,
        textAlign: 'center',
    },
    titleLog2: {
        fontSize: 30,
        fontWeight: '800',
        color: '#FF7F00',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitleLog: {
        fontSize: 13,
        fontWeight: '150',
        color: '#ffffff',
        marginBottom: 10,
        textAlign: 'left',
        marginLeft: 10,
        textAlign: 'center',
    },
    textInput: {
        width: 300,
        marginBottom: 16,
        backgroundColor: '#ffffff',
        borderColor: '#000000', // Establece el color del borde a negro
        borderWidth: 1.8,         // Grosor del borde
        borderRadius: 20,
        borderTopLeftRadius: 20,  // Redondeo solo del borde inferior izquierdo
        borderTopRightRadius: 20,   // Espaciado interno vertical
        marginTop: 30
    },
    textInputHeaderHome: {
        height: 57,
        width: 320,
        backgroundColor: '#e1f1dd',
    },
    buttonLog: {
        paddingVertical: 5,
        marginBottom: 80,
        marginTop: 20
    },
    titleSign: {
        fontSize: 30,
        fontWeight: '800',
        color: '#FF7F00',
        marginBottom: 10,
        textAlign: 'center',
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
        backgroundColor: '#ffffff',
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
    photoCard: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10
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
    categoryPhoto: {
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
    },
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#1E1F21',
        marginBottom: 50,
    },
    textStyele: {
        fontSize: 28,
        color: 'black',
    },
    headingStyle: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 23,

    },
    photosHome: {
        width: 148,
        height: 100,
        borderRadius: 10,

    },
    buttonHome: {
        width: 100,
        height: 40,
        borderRadius: 20,
        alignContent: 'center',
        marginTop: 5
    },
    buttonTextHome: {
        fontSize: 10,
    },
    description: {
        color: '#00C3FF'
    },
    priceText: {
        color:'black'
    }

});

export default styles;