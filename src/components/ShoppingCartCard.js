import React, { useContext } from 'react';
import { Image, Text, Pressable, View } from 'react-native';
import styles from '../styles/cardItemStyles';
import { AppContext } from '../context/AppContext'; // Ajusta la ruta a donde está el AppProvider

const CardItemCart = ({ car }) => {
    const { state, dispatch } = useContext(AppContext); // Obtenemos el estado global y el dispatch del contexto

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: car.id } });
    };

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: car.id } });
    };

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
/*import React from 'react';
import { Image, Text, Pressable, View } from 'react-native';
import styles from '../styles/cardItemStyles';


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


export default CardItemCart;*/