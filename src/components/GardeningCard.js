import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Text, IconButton } from 'react-native-paper';

const GardeningCard = ({ gardening }) => {

  const navigation = useNavigation();

  const handleSelect = () => {
    navigation.navigate('ArticlesDetails', { gardening });
  };

  const maxPrice = 99999999;
  const price = gardening.price > maxPrice ? maxPrice : gardening.price;
  const formattedPrice = price.toLocaleString();


  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <Image source={{ uri: gardening.photo }} style={styles.photosHome} />
          <Text variant="bodySmall" >{gardening.description}</Text>
          <Text variant="bodySmall" style={styles.priceText}>${formattedPrice}</Text>
          <Button
            style={styles.buttonHome}
            labelStyle={styles.buttonTextHome}
            buttonColor='#96b89c'
            mode="contained"
            onPress={handleSelect}>
            Elegir
          </Button>
        </Card.Content>
      </Card>
    </View>

  );
};

export default GardeningCard;