import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor:'#f7fef4',

  },
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    subContainer: {
      flex: 1,
      padding: 15,
    },
    footer: {
      borderTopWidth: 0.5,
      paddingLeft: 15,
      borderColor: 'grey',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textFooter: {
      fontSize: 16,
      fontWeight: '600',
    },
    screenContainer: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop:80,
      paddingBottom: 60,
  },
  bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      marginTop:390,
  },
  totalText: {
      fontSize: 18,
      fontWeight: 'bold',
  },
  checkoutButton: {
      backgroundColor: '#28a745',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
  },
  checkoutButtonText: {
      color: '#fff',
      fontWeight: 'bold',
  },
    buttonCheckout: {
      backgroundColor: 'orange',
      paddingHorizontal: 30,
      paddingVertical: 15,
    },
    button: {
      borderWidth: 0.5,
      borderRadius: 4,
      width: 25,
      height: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    iconPlus: {
      color: 'green',
      fontWeight: '600',
    },
  });

  export default styles;