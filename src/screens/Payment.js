import React, { useState } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import styles from '../styles/paymentStyles';
import { Card, Text as PaperText, RadioButton, Button, IconButton } from 'react-native-paper';

import { Pressable } from 'react-native';

const Payment = () => {
    const [checked, setChecked] = React.useState('first');

    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <ScrollView >
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Content>
                        <PaperText variant="titleLarge">Información del Usuario</PaperText>
                        <PaperText variant="bodyMedium">Nombre Usuario</PaperText>
                        <PaperText variant="bodyMedium">Dirección</PaperText>
                        <PaperText variant="bodyMedium">Ciudad y Departamentos</PaperText>
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

                <Card style={styles.cardContent2}>
                    <Card.Content>
                        <View style={styles.rowContainer}>
                            <Image
                                source={{ uri: 'https://dovet.es/wp-content/uploads/2019/06/cachorro-pastor-aleman.jpg' }}
                                style={styles.image}
                            />
                            <View style={styles.infoContainer}>
                                <PaperText variant="titleLarge">Nombre producto</PaperText>
                                <PaperText variant="bodyMedium">Descripción</PaperText>
                                <PaperText variant="bodyMedium">Precio</PaperText>
                            </View>
                            <View style={styles.container2}>
                                <Pressable onPress={decreaseQuantity} style={styles.button}>
                                    <Text style={styles.buttonText}>-</Text>
                                </Pressable>
                                <Text style={styles.quantityText}>{quantity}</Text>
                                <Pressable onPress={increaseQuantity} style={styles.button}>
                                    <Text style={styles.buttonText}>+</Text>
                                </Pressable>
                            </View>
                        </View>

                    </Card.Content>
                </Card>
                <Card style={styles.cardContent2}>
                    <Card.Content>
                        <View style={styles.rowContainer}>
                            <Image
                                source={{ uri: 'https://dovet.es/wp-content/uploads/2019/06/cachorro-pastor-aleman.jpg' }}
                                style={styles.image}
                            />
                            <View style={styles.infoContainer}>
                                <PaperText variant="titleLarge">Nombre producto</PaperText>
                                <PaperText variant="bodyMedium">Descripción</PaperText>
                                <PaperText variant="bodyMedium">Precio</PaperText>
                            </View>
                            <View style={styles.container2}>
                                <Pressable onPress={decreaseQuantity} style={styles.button}>
                                    <Text style={styles.buttonText}>-</Text>
                                </Pressable>
                                <Text style={styles.quantityText}>{quantity}</Text>
                                <Pressable onPress={increaseQuantity} style={styles.button}>
                                    <Text style={styles.buttonText}>+</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.cardContent2}>
                    <Card.Content>
                        <View style={styles.rowContainer}>
                            <Image
                                source={{ uri: 'https://dovet.es/wp-content/uploads/2019/06/cachorro-pastor-aleman.jpg' }}
                                style={styles.image}
                            />
                            <View style={styles.infoContainer}>
                                <PaperText variant="titleLarge">Nombre producto</PaperText>
                                <PaperText variant="bodyMedium">Descripción</PaperText>
                                <PaperText variant="bodyMedium">Precio</PaperText>
                            </View>
                            <View style={styles.container2}>
                                <Pressable onPress={decreaseQuantity} style={styles.button}>
                                    <Text style={styles.buttonText}>-</Text>
                                </Pressable>
                                <Text style={styles.quantityText}>{quantity}</Text>
                                <Pressable onPress={increaseQuantity} style={styles.button}>
                                    <Text style={styles.buttonText}>+</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <View style={styles.totalContainer}>
                    <View style={styles.separator} />
                    <View style={styles.totalContent}>
                        <Text style={styles.totalText}>Total: $100.000</Text>
                        <Button
                            mode="contained"
                            buttonColor='#89c07a'
                            style={styles.buttonLog}
                            onPress={() => alert('Estamos procesando su pago')
                            }>
                            Pagar
                        </Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Payment;
