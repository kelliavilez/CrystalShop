import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    wrapperImageCheck: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    productImage: {
      width: 80,
      height: 80,
      marginHorizontal: 10,
    },
    button: {
      borderWidth: 0.5,
      borderRadius: 4,
      width: 25,
      height: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconPlus: {
      color: 'green',
      fontWeight: '600',
    },
    wrapperCardBottom: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
  export default styles;