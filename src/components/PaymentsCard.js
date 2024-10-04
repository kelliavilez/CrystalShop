import React, { useContext, useState } from 'react';
import { View, Image, ScrollView, Text, Alert } from 'react-native';
import { Card, Text as PaperText, RadioButton, Button } from 'react-native-paper';
import styles from '../styles/paymentStyles';
import { AppContext } from '../context/AppContext';  

const PaymentsCard = () => { 

    const { state, dispatch } = useContext(AppContext);
    const [checked, setChecked] = useState('first');

    const selectedItems = state.cart.cartItems.filter(item => state.cart.selectedItems.includes(item.id));

    const total = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const totalSelected = selectedItems.reduce((sum, item) => sum + item.quantity, 0);

    const handleAddToMyBoughts = () => {
        if (selectedItems.length === 0) {
            Alert.alert('Carrito Vacío', 'No hay artículos seleccionados para comprar.');
            return;
        }

        const boughtItems = selectedItems.map(item => ({
            id: item.id,
            productName: item.productName, 
            image: item.image,   
            category: item.category,
            state: 'Pagado',
        }));

        dispatch({
            type: 'ADD_TO_BOUGHTS_HISTORY',
            payload: boughtItems, 
        });

        dispatch({
            type: 'CLEAR_CART',
        });

        Alert.alert(
            'Pago Exitoso',
            'Pago procesado exitosamente. Sus artículos han sido añadidos a sus compras.',
            [
                { text: 'OK', onPress: () => console.log('Pago completado') }
            ]
        );
    };

    const { username, address } = state.user;  

    return (
        <ScrollView>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Content>
                        <PaperText variant="titleLarge">Información del Usuario</PaperText>
                        <PaperText variant="bodyMedium">Nombre: {username}</PaperText>
                        <PaperText variant="bodyMedium">Dirección: {address}</PaperText>
                    </Card.Content>
                </Card>

                <Card style={styles.cardContent}>
                    <Card.Content>
                        <PaperText variant="titleLarge">Forma de Pago</PaperText>
                        <View style={styles.radioItem}>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                            <PaperText>Tarjeta de Crédito</PaperText>
                        </View>
                        <View style={styles.radioItem}>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />
                            <PaperText>PSE</PaperText>
                        </View>
                        <View style={styles.radioItem}>
                            <RadioButton
                                value="three"
                                status={checked === 'three' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('three')}
                            />
                            <PaperText>Efecty</PaperText>
                        </View>
                    </Card.Content>
                </Card>

                {selectedItems.map((item) => (
                    <Card key={item.id} style={styles.cardContent2}>
                        <Card.Content>
                            <View style={styles.rowContainer}>
                                <Image source={{ uri: item.image }} style={styles.productImage} />
                                <View style={styles.infoContainer}>
                                    <PaperText variant="bodyMedium">Cantidad: {item.quantity}</PaperText>
                                    <PaperText variant="bodyMedium">{item.productName}</PaperText>
                                    <PaperText variant="bodyMedium">Precio: ${item.price.toFixed(2)}</PaperText>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                ))}

                <View style={styles.totalContainer}>
                    <View style={styles.separator} />
                    <View style={styles.totalContent}>
                        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
                        <Button
                            mode="contained"
                            buttonColor='#89c07a'
                            style={styles.buttonLog}
                            onPress={handleAddToMyBoughts} 
                        >
                            Pagar
                        </Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default PaymentsCard;
