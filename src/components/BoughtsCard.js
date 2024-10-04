import React, { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import styles from '../styles/BoughtStyles';
import { Card, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const BoughtsCard = ({ article }) => {
  const [status, setStatus] = useState(null);
  const navigation = useNavigation();

  const showStatusAlert = () => {
    Alert.alert(
      'Estados',
      '',
      [
        {
          text: 'Entregado',
          onPress: () => setStatus('entregado'),
        },
        {
          text: 'Pendiente',
          onPress: () => setStatus('pendiente'),
        },
        {
          text: 'Cancelado',
          onPress: () => setStatus('cancelado'),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.container}>
            <Image source={{ uri: article.image }} style={styles.photo} />
            <View style={styles.textContainer}>
              <Text variant="bodySmall">{article.category}</Text>
              <Text variant="bodySmall">{article.productName}</Text>
              {status && (
                <Text variant="bodySmall">
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
              Estado
            </Button>

          </View>

        </Card.Content>
      </Card>
    </View>
  );
};

export default BoughtsCard;

