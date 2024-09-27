import React, { useState } from 'react';
import { View, FlatList, Text, Pressable } from 'react-native';
import CardItemCart from '../components/ShoppingCartCard';
import styles from '../styles/shoppingCarStyles';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: '123abc',
            image: 'https://images.pexels.com/photos/3586249/pexels-photo-3586249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            productName: 'iPhone 6 128gb Silver',
            price: 300000,
            quantity: 3,
        },
        {
            id: '456def',
            image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            productName: 'iPhone X 256gb Silver',
            price: 600000,
            quantity: 1,
        },
        {
            id: '789hij',
            image: 'https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            productName: 'Macbook Pro',
            price: 1200000,
            quantity: 2,
        },
    ]);

    const handleAdd = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleSubtract = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    return (
        <View style={styles.viewStyle}>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                    <CardItemCart 
                        car={item} 
                        onAdd={() => handleAdd(item.id)}
                        onSubtract={() => handleSubtract(item.id)}
                    />
                )}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.bottomContainer}>
                <Text style={styles.totalText}>Total: $---</Text>
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
