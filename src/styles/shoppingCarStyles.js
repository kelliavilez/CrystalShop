import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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