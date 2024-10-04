import React, { useContext } from 'react';
import { Image, Text, Pressable, View } from 'react-native';
import styles from '../styles/cardItemStyles';
import { AppContext } from '../context/AppContext';

const CardItemCart = ({ car }) => {
    const { state, dispatch } = useContext(AppContext);

    const isSelected = state.cart.selectedItems.includes(car.id);

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: car.id } });
    };

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: car.id } });
    };

    const toggleSelectItem = () => {
        dispatch({ type: 'TOGGLE_SELECT_ITEM', payload: { id: car.id } });
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapperImageCheck}>
                <Pressable style={styles.button} onPress={toggleSelectItem}>
                    <Text style={styles.iconPlus}>
                        {isSelected ? '✔' : ''}
                    </Text>
                </Pressable>
                <Image
                    source={{ uri: car.image }}
                    style={styles.productImage}
                />
            </View>
            <View style={{ justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.productName}>{car.productName}</Text>
                    <Text style={styles.price}>{car.originalPrice}</Text>
                    <Text style={styles.price}>${car.price}</Text>
                    <Text style={styles.price}>{car.discount}</Text>
                </View>
                <View style={styles.wrapperCardBottom}>
                    <Pressable style={styles.button} onPress={handleDecrement}>
                        <Text style={styles.icon}>-</Text>
                    </Pressable>
                    <Text style={styles.quantity}>{car.quantity}</Text>
                    <Pressable style={[styles.button, { borderColor: 'green' }]} onPress={handleIncrement}>
                        <Text style={styles.iconPlus}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default CardItemCart;
