import React from 'react';
import { Image, Text, Pressable, View } from 'react-native';
import styles from '../styles/cardItemStyles';

const CardItemCart = ({ car, onAdd, onSubtract }) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapperImageCheck}>
                <Pressable style={styles.button} onPress={() => alert('V')}>
                    <Text style={styles.iconPlus}>V</Text>
                </Pressable>
                <Image
                    source={{ uri: car.image }}
                    style={styles.productImage}
                />
            </View>
            <View style={{ justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.productName}>{car.productName}</Text>
                    <Text style={styles.price}>${car.price}</Text>
                </View>
                <View style={styles.wrapperCardBottom}>
                    <Pressable style={styles.button} onPress={onSubtract}>
                        <Text style={styles.icon}>-</Text>
                    </Pressable>
                    <Text style={styles.quantity}>{car.quantity}</Text>
                    <Pressable style={[styles.button, { borderColor: 'green' }]} onPress={onAdd}>
                        <Text style={styles.iconPlus}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default CardItemCart;
