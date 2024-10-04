import React, { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import styles from '../styles/BoughtStyles';
import { Card, Button, Text } from 'react-native-paper';

const BoughtsCard = ({ article }) => {
  const [status, setStatus] = useState(null);

  const showStatusAlert = () => {
    Alert.alert(
      'Estados',
      '',
      [
        {
          text: 'Entregado',
          onPress: () => setStatus('Entregado'),
        },
        {
          text: 'En tránsito',
          onPress: () => setStatus('En tránsito'),
        },
        {
          text: 'Cancelado',
          onPress: () => setStatus('Cancelado'),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.container}>
            <Image source={{ uri: article.image }} style={styles.photo} />
            <View style={styles.textContainer}>
              <Text style={styles.categoryText} variant="bodySmall">{article.category}</Text>
              <Text style={styles.productNameText} variant="bodyMedium">{article.productName}</Text>
              {status && (
                <Text style={styles.statusText} variant="bodySmall">
                  Estado: {status}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode="outlined"
              onPress={showStatusAlert}
              style={styles.buttonState}
              labelStyle={styles.buttonText}
            >
              Cambiar Estado
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default BoughtsCard;
