import React from 'react';
import { View, Image} from 'react-native';
import styles from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Text, IconButton } from 'react-native-paper';

const PetsCard = ({ pet }) => {

  const navigation=useNavigation();

  const handleSelect = () => {
    navigation.navigate('ArticlesDetails', { pet }); 
  };

  const maxPrice = 99999999;
  const price = pet.price > maxPrice ? maxPrice : pet.price;
  const formattedPrice = price.toLocaleString();


  return (
    <View>
    <Card style={styles.card}>
    <Card.Content>
      <Image source={{ uri: pet.photo }} style={styles.photosHome} />
      <Text variant="bodySmall" >{pet.description}</Text>   
      <Text variant="bodySmall" style={styles.priceText}>${formattedPrice}</Text>
      <Button 
      style={styles.buttonHome} 
      labelStyle={styles.buttonTextHome} 
      buttonColor='#96b89c'
       mode="contained" 
       onPress={handleSelect}>
      Select
      </Button>
    </Card.Content>
    </Card>
    </View>
    
  );
};

export default PetsCard;