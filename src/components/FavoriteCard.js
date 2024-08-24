import React from 'react';
import { View, Image, ScrollView,Text } from 'react-native';
import styles from '../styles/favoriteStyles';
import { Card, Text as PaperText, Button } from 'react-native-paper';

const FavoriteCard = ({ ofert }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.rowContainer}>
                            <Image
                                source={{ uri: ofert.photo }}
                                style={styles.image}
                            />
                            <View style={styles.infoContainer}>
                                <PaperText style={styles.nameText} variant="titleLarge">{ofert.name}</PaperText>
                                <PaperText style={styles.descriptionText} variant="bodyMedium">{ofert.description}</PaperText>
                                <PaperText style={styles.status} variant="bodyMedium">{ofert.status}</PaperText>
                            </View>
                            <View style={styles.statusContainer}>
                                <Text style={styles.status}>Disponible</Text>
                            </View>
                        </View>
                        <Button
                            mode="contained"
                            buttonColor='#89c07a'
                            style={styles.buttonLog}
                            onPress={() => alert('Estamos procesando su pago')
                            }>
                            Añadir al carrito
                        </Button>
                    </Card.Content>

                </Card>
            </View>

        </ScrollView>
    );
};

export default FavoriteCard;
