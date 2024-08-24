import React from 'react';
import { Image, StyleSheet, Text, Pressable, View } from 'react-native';
import styles from '../styles/cardItemStyles';
import { useNavigation } from '@react-navigation/native';


const CardItemCart = ({ car }) => {
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
                    <Pressable style={styles.button} onPress={() => console.log('disminuyo')}>
                        <Text style={styles.icon}>-</Text>
                    </Pressable>
                    <Text style={styles.quantity}>{car.quantity}</Text>
                    <Pressable style={[styles.button, { borderColor: 'green' }]} onPress={() => console.log('agrego')}>
                        <Text style={styles.iconPlus}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};
        

export default CardItemCart;