import React from 'react';
import { View, Image} from 'react-native';
import styles from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Text, IconButton } from 'react-native-paper';

const MakeupCard = ({ makeup }) => {

  const navigation=useNavigation();

  const handleSelect = () => {
    navigation.navigate('ArticlesDetails', { makeup }); 
  };

  const maxPrice = 99999999;
  const price = makeup.price > maxPrice ? maxPrice : makeup.price;
  const formattedPrice = price.toLocaleString();


  return (
    <View>
    <Card style={styles.card}>
    <Card.Content>
      <Image source={{ uri: makeup.photo }} style={styles.photosHome} />
      <Text variant="bodySmall" >{makeup.description}</Text>   
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

export default MakeupCard;