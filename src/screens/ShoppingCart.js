import React, { useContext } from 'react';
import { View, FlatList, Text, Pressable } from 'react-native';
import { AppContext } from '../context/AppContext';  // Importamos el contexto global
import CardItemCart from '../components/ShoppingCartCard';
import styles from '../styles/shoppingCarStyles';

const ShoppingCart = () => {
  const { state, dispatch } = useContext(AppContext);

  // Calcular el total solo de los artículos seleccionados
  const totalSelected = state.cart.cartItems
    .filter(item => state.cart.selectedItems.includes(item.id)) // Filtra solo los seleccionados
    .reduce((sum, item) => sum + item.price * item.quantity, 0); // Calcula el total de los seleccionados

  return (
    <View style={styles.viewStyle}>
      {/* Lista de artículos en el carrito */}
      <FlatList
        data={state.cart.cartItems} // Usamos los datos del carrito desde el estado global
        renderItem={({ item }) => <CardItemCart car={item} />}
        keyExtractor={(item) => item.id.toString()} // Aseguramos que el ID sea string
      />

      <View style={styles.bottomContainer}>
        {/* Mostrar total basado en los seleccionados */}
        <Text style={styles.totalText}>Total : ${totalSelected.toFixed(2)}</Text>

        {/* Botón de pagar */}
        <Pressable
          style={styles.checkoutButton}
          onPress={() => alert(`Total a pagar: $${totalSelected.toFixed(2)}`)}
          disabled={totalSelected === 0} // Deshabilitar botón si no hay artículos seleccionados
        >
          <Text style={styles.checkoutButtonText}>
            {totalSelected === 0 ? 'Seleccione artículos' : 'Pagar'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ShoppingCart;
