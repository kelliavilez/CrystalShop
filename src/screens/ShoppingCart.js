import React, { useContext } from 'react';
import { View, FlatList, Text, Pressable } from 'react-native';
import { AppContext } from '../context/AppContext';  // Importamos el contexto global
import CardItemCart from '../components/ShoppingCartCard';
import styles from '../styles/ShoppingCarStyles';

const ShoppingCart = () => {
  const { state, dispatch } = useContext(AppContext); 

  return (
    <View style={styles.viewStyle}>
      <FlatList
        data={state.cart.cartItems} // Usamos los datos del carrito desde el estado global
        renderItem={({ item }) => <CardItemCart car={item} />}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.bottomContainer}>
        <Text style={styles.totalText}>Total: ${state.cart.total}</Text>
        <Pressable
          style={styles.checkoutButton}
          onPress={() => alert('Procediendo al pago')}
        >
          <Text style={styles.checkoutButtonText}>Pagar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ShoppingCart;
