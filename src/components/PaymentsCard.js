// PaymentsCard.js
import React, { useContext, useState } from 'react';
import { View, Image, ScrollView, Text, Alert, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text as PaperText, RadioButton, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/paymentStyles';
import { AppContext } from '../context/AppContext';

const PaymentsCard = () => {

    const { state, dispatch } = useContext(AppContext);
    const [checked, setChecked] = useState('first');
    const [showModal, setShowModal] = useState(false);
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        accountNumber: '',
        selectedBank: '',
        pseDocument: '',
        pseBank: '',
        pseEmail: '',
        efectyCode: ''
    });

    const selectedItems = state.cart.cartItems.filter(item => state.cart.selectedItems.includes(item.id));
    const total = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleAddToMyBoughts = () => {
        if (selectedItems.length === 0) {
            Alert.alert('Carrito Vacío', 'No hay artículos seleccionados para comprar.');
            return;
        }

        if (checked === 'first' || checked === 'second') {
            setShowModal(true);
        } else if (checked === 'three') {
            handleEfectyPayment();
        }
    };

    const handleCreditCardPayment = () => {
        const { cardNumber, accountNumber, selectedBank } = paymentData;

        if (cardNumber.length !== 16) {
            Alert.alert('Error', 'Por favor ingresa un número de tarjeta válido de 16 dígitos.');
            return;
        }

        if (accountNumber.trim() === '') {
            Alert.alert('Error', 'Por favor ingresa un número de cuenta válido.');
            return;
        }

        if (selectedBank === '') {
            Alert.alert('Error', 'Por favor selecciona un banco.');
            return;
        }

        completePurchase();
        setShowModal(false);
    };

    const handlePSEPayment = () => {
        const { pseDocument, pseBank, pseEmail } = paymentData;

        if (pseDocument.trim() === '') {
            Alert.alert('Error', 'Por favor ingresa tu número de documento.');
            return;
        }

        if (pseBank === '') {
            Alert.alert('Error', 'Por favor selecciona un banco.');
            return;
        }

        if (pseEmail.trim() === '') {
            Alert.alert('Error', 'Por favor ingresa tu correo electrónico.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(pseEmail)) {
            Alert.alert('Error', 'Por favor ingresa un correo electrónico válido.');
            return;
        }

        completePurchase();
        setShowModal(false);
    };

    const handleEfectyPayment = () => {
        const efectyCode = Math.floor(100000000 + Math.random() * 900000000);
        setPaymentData({ ...paymentData, efectyCode });
        Alert.alert(
            'Código de Pago Generado',
            `Tu código de pago es: ${efectyCode}`,
            [
                { text: 'OK', onPress: () => console.log('Código de pago generado') }
            ]
        );
    };

    const completePurchase = () => {
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
            'Ir a mis compras para ver historial',
            [{ text: 'OK', onPress: () => console.log('Pago completado') }]
        );

        setPaymentData({
            cardNumber: '',
            accountNumber: '',
            selectedBank: '',
            pseDocument: '',
            pseBank: '',
            pseEmail: '',
            efectyCode: ''
        });
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
                                color="black"
                            />
                            <PaperText style={styles.radioLabel}>Tarjeta de Crédito</PaperText>
                        </View>
                        <View style={styles.radioItem}>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                                color="black"
                            />
                            <PaperText style={styles.radioLabel}>PSE</PaperText>
                        </View>
                        <View style={styles.radioItem}>
                            <RadioButton
                                value="three"
                                status={checked === 'three' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('three')}
                                color="black"
                            />
                            <PaperText style={styles.radioLabel}>Efecty</PaperText>
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
                                    <PaperText variant="bodyMedium" style={styles.productName}>{item.productName}</PaperText>
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

                <Modal visible={showModal} transparent={true} animationType="slide">
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <ScrollView>
                                {checked === 'first' && (
                                    <Text style={styles.modalTitle}>Ingresa los datos de tu Tarjeta de Crédito</Text>
                                )}
                                {checked === 'second' && (
                                    <Text style={styles.modalTitle}>Ingresa los datos para PSE</Text>
                                )}
                                {checked === 'first' && (
                                    <>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Número de Tarjeta"
                                            keyboardType="numeric"
                                            maxLength={16}
                                            value={paymentData.cardNumber}
                                            onChangeText={(text) => setPaymentData({ ...paymentData, cardNumber: text })}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Número de Cuenta"
                                            keyboardType="numeric"
                                            value={paymentData.accountNumber}
                                            onChangeText={(text) => setPaymentData({ ...paymentData, accountNumber: text })}
                                        />
                                        <View style={styles.pickerContainer}>
                                            <Picker
                                                selectedValue={paymentData.selectedBank}
                                                style={styles.picker}
                                                onValueChange={(itemValue) => setPaymentData({ ...paymentData, selectedBank: itemValue })}
                                            >
                                                <Picker.Item label="Selecciona tu banco" value="" />
                                                <Picker.Item label="Bancolombia" value="Bancolombia" />
                                                <Picker.Item label="Nu" value="Nu" />
                                                <Picker.Item label="Daviplata" value="Daviplata" />
                                            </Picker>
                                        </View>
                                        <Button
                                            mode="contained"
                                            onPress={handleCreditCardPayment}
                                            style={styles.modalButton}
                                        >
                                            Pagar con Tarjeta
                                        </Button>
                                    </>
                                )}
                                {checked === 'second' && (
                                    <>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Número de Documento"
                                            keyboardType="numeric"
                                            value={paymentData.pseDocument}
                                            onChangeText={(text) => setPaymentData({ ...paymentData, pseDocument: text })}
                                        />
                                        <View style={styles.pickerContainer}>
                                            <Picker
                                                selectedValue={paymentData.pseBank}
                                                style={styles.picker}
                                                onValueChange={(itemValue) => setPaymentData({ ...paymentData, pseBank: itemValue })}
                                            >
                                                <Picker.Item label="Selecciona tu banco" value="" />
                                                <Picker.Item label="Bancolombia" value="Bancolombia" />
                                                <Picker.Item label="Nu" value="Nu" />
                                                <Picker.Item label="Daviplata" value="Daviplata" />
                                            </Picker>
                                        </View>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Correo Electrónico"
                                            keyboardType="email-address"
                                            value={paymentData.pseEmail}
                                            onChangeText={(text) => setPaymentData({ ...paymentData, pseEmail: text })}
                                        />
                                        <Button
                                            mode="contained"
                                            onPress={handlePSEPayment}
                                            style={styles.modalButton}
                                        >
                                            Pagar con PSE
                                        </Button>
                                    </>
                                )}

                                {(checked === 'first' || checked === 'second') && (
                                    <TouchableOpacity onPress={() => setShowModal(false)}>
                                        <Text style={styles.cancelButtonText}>Cancelar</Text>
                                    </TouchableOpacity>
                                )}
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

export default PaymentsCard;
