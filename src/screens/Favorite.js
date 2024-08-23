import React, { useState } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import styles from '../styles/favoriteStyles';
import { Card, Text as PaperText, RadioButton, Button } from 'react-native-paper';
import { Pressable } from 'react-native';

const Favorite = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Card style={styles.cardContent2}>
                    <Card.Content>
                        <View style={styles.rowContainer}>
                            <Image
                                source={{ uri: 'https://ae01.alicdn.com/kf/He8e13307af2440d2a4e3d3e3d5e9926fg/Cuenco-de-comida-para-gatos-alimentador-autom-tico-dispensador-de-agua-con-almacenamiento-de-alimentos-secos.jpg' }}
                                style={styles.image}
                            />
                            <View style={styles.infoContainer}>
                                <PaperText variant="titleLarge">Nombre producto</PaperText>
                                <PaperText variant="bodyMedium">Descripción</PaperText>
                                <PaperText variant="bodyMedium">Precio</PaperText>
                            </View>
                            <View style={styles.container2}>
                                <Text style={styles.text}>Disponible</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.cardContent2}>
                    <Card.Content>
                        <View style={styles.rowContainer}>
                            <Image
                                source={{ uri: 'https://m.media-amazon.com/images/I/61+7PjVFMsS._AC_SL1500_.jpg' }}
                                style={styles.image}
                            />
                            <View style={styles.infoContainer}>
                                <PaperText variant="titleLarge">Nombre producto</PaperText>
                                <PaperText variant="bodyMedium">Descripción</PaperText>
                                <PaperText variant="bodyMedium">Precio</PaperText>
                            </View>
                            <View style={styles.container2}>
                                <Text style={styles.text}>Disponible</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.cardContent2}>
                    <Card.Content>
                        <View style={styles.rowContainer}>
                            <Image
                                source={{ uri: 'https://static.vecteezy.com/system/resources/previews/006/116/842/non_2x/dog-paw-marks-accessories-for-pets-shop-concept-animal-logo-vector.jpg' }}
                                style={styles.image}
                            />
                            <View style={styles.infoContainer}>
                                <PaperText variant="titleLarge">Nombre producto</PaperText>
                                <PaperText variant="bodyMedium">Descripción</PaperText>
                                <PaperText variant="bodyMedium">Precio</PaperText>
                            </View>
                            <View style={styles.container2}>
                                <Text style={styles.text}>Disponible</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.cardContent2}>
                    <Card.Content>
                        <View style={styles.rowContainer}>
                            <Image
                                source={{ uri: 'https://img.freepik.com/vector-gratis/set-maquillaje-accesorios-dibujo_24640-46682.jpg' }}
                                style={styles.image}
                            />
                            <View style={styles.infoContainer}>
                                <PaperText variant="titleLarge">Nombre producto</PaperText>
                                <PaperText variant="bodyMedium">Descripción</PaperText>
                                <PaperText variant="bodyMedium">Precio</PaperText>
                            </View>
                            <View style={styles.container2}>
                                <Text style={styles.text}>Disponible</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.cardContent2}>
                    <Card.Content>
                        <View style={styles.rowContainer}>
                            <Image
                                source={{ uri: 'https://i.pinimg.com/originals/ac/4d/50/ac4d50d2b9e778a33bfe98210b8708a3.jpg ' }}
                                style={styles.image}
                            />
                            <View style={styles.infoContainer}>
                                <PaperText variant="titleLarge">Nombre producto</PaperText>
                                <PaperText variant="bodyMedium">Descripción</PaperText>
                                <PaperText variant="bodyMedium">Precio</PaperText>
                            </View>
                            <View style={styles.container2}>
                                <Text style={styles.text}>Disponible</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    );
};

export default Favorite;
