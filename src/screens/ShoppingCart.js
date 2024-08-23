import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import CardItemCart from './CardItemCart';
import styles from '../styles/shoppingCarStyles';

const Data = [
  {
    id: '123abc',
    image: 'https://images.pexels.com/photos/3586249/pexels-photo-3586249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productName: 'iPhone 6 128gb Silver',
    price: 300,
    quantity: 3,
  },
  {
    id: '456def',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productName: 'iPhone X 256gb Silver',
    price: 600,
    quantity: 1,
  },
  {
    id: '789hij',
    image: 'https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    productName: 'Macbook Pro',
    price: 1200,
    quantity: 2,
  },
];

const App = () => {
  const [listCart] = useState(Data);

  // Calcular el precio total
  const totalPrice = listCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {listCart.map(item => (
          <CardItemCart key={item.id} item={item} />
        ))}
      </View>
      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.iconPlus}>V</Text>
          </TouchableOpacity>
          <Text style={[styles.textFooter, { marginRight: 10 }]}>Total Price</Text>
          <Text style={styles.textFooter}>${totalPrice}</Text>
        </View>
        <TouchableOpacity style={[styles.buttonCheckout, { backgroundColor: 'green' }]}>
          <Text style={{ color: 'white' }}>Continuar con la compra</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
