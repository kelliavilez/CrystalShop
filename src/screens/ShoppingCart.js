import React, { useContext } from 'react';
import { View, FlatList, Text, Pressable, ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext';
import CardItemCart from '../components/ShoppingCartCard';
import styles from '../styles/cardItemStyles';
import { useNavigation } from '@react-navigation/native';

const ShoppingCart = () => {
  const { state, dispatch } = useContext(AppContext);

  const navigation = useNavigation();

  const totalSelected = state.cart.cartItems
    .filter(item => state.cart.selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.viewStyle}>
        <FlatList
          data={state.cart.cartItems}
          renderItem={({ item }) => <CardItemCart car={item} />}
          keyExtractor={(item) => item.id.toString()}
        />

        <View style={styles.bottomContainer}>
          <Text style={styles.totalText}>Total : ${totalSelected.toFixed(2)}</Text>

          <Pressable
            style={styles.checkoutButton}
            onPress={() => navigation.navigate('PaymentsCard', {})}
            disabled={totalSelected === 0}
          >
            <Text style={styles.checkoutButtonText}>
              {totalSelected === 0 ? 'Seleccione artículos' : 'Pagar'}
            </Text>
          </Pressable>

        </View>
      </View>
    </ScrollView>
  );
};

export default ShoppingCart;
