import React, { useContext, useState } from 'react';
import { View, Image, ScrollView, Text, Alert, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Card, Text as PaperText, RadioButton, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/paymentStyles';
import { handleIntegrationMP } from '../mercadopago/mpintegration';
import InAppBrowser from 'react-native-inappbrowser-reborn';
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
    const { username, address } = state.user;

    const handleAddToMyBoughts = () => {
        if (selectedItems.length === 0) {
            Alert.alert('Carrito Vacío', 'No hay artículos seleccionados para comprar.');
            return;
        }

        if (checked === 'first') {
            handleCreditCardPayment(selectedItems); 
        } else if (checked === 'second') {
            setShowModal(true); 
        } else if (checked === 'three') {
            handleEfectyPayment(); 
        }
    };

    const handleCreditCardPayment = async (items) => {
        try {
            const data = await handleIntegrationMP(items);
            if (data) {
                InAppBrowser.open(data);
                completePurchase(); 
            } else {
                Alert.alert('Error', 'No se pudo procesar el pago con tarjeta de crédito.');
            }
        } catch (error) {
            console.error('Error en el pago con tarjeta de crédito:', error);
        }
    };

    const handlePSEPayment = () => {
        const { pseDocument, pseBank, pseEmail } = paymentData;

        if (pseDocument.trim() === '' || pseBank === '' || pseEmail.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pseEmail)) {
            Alert.alert('Error', 'Por favor ingresa los datos completos y válidos para PSE.');
            return;
        }

        completePurchase(); 
        setShowModal(false);
    };

    const handleEfectyPayment = () => {
        const efectyCode = Math.floor(100000000 + Math.random() * 900000000);
        setPaymentData({ ...paymentData, efectyCode });
        Alert.alert('Código de Pago Generado', `Tu código de pago es: ${efectyCode}`, [{ text: 'OK' }]);

        completePurchase(); 
    };

    const completePurchase = () => {
        const boughtItems = selectedItems.map(item => ({
            id: item.id,
            productName: item.productName,
            image: item.image,
            category: item.category,
            state: 'Pagado',
        }));

        dispatch({ type: 'ADD_TO_BOUGHTS_HISTORY', payload: boughtItems });
        dispatch({ type: 'CLEAR_CART' });

        Alert.alert('Pago Exitoso', 'Ir a mis compras para ver historial', [{ text: 'OK' }]);
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
                            <PaperText style={styles.radioLabel}>Tarjeta de Crédito/ MercadoPago</PaperText>
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
                                {checked === 'second' && (
                                    <>
                                        <Text style={styles.modalTitle}>Ingresa los datos para PSE</Text>
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
                                        <TouchableOpacity onPress={() => setShowModal(false)}>
                                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                                        </TouchableOpacity>
                                    </>
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
