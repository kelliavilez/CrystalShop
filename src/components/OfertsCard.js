import React from 'react';
import { View, Image} from 'react-native';
import styles from '../styles/ofertsStyles';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Text, IconButton } from 'react-native-paper';


const   OfertsCard = ({ ofert }) => {

  const navigation=useNavigation();

  const discountAmount = (ofert.originalPrice * ofert.discount) / 100;
  const finalPrice = ofert.originalPrice - discountAmount;

  return (
    <View>
    <Card style={styles.OfertsCard}>
    <Card.Content>
      <View style={styles.container}>
      <Image source={{ uri: ofert.photo }} style={styles.photoCard } />
      <View style={styles.textContainer}>
      <View style={styles.price}>
      <Text style={styles.originalPrice} variant="bodySmall">{ofert.originalPrice.toLocaleString()}</Text>
      <Text style={styles.finalPrice} variant="bodySmall">${finalPrice.toLocaleString()}</Text>
      <Text style={styles.discount} variant="bodySmall">-{ofert.discount}%</Text>
      </View>
      <Text variant="titleMedium" >{ofert.name}</Text>
      <Text variant="bodySmall">{ofert.description}</Text>
      </View>
      </View>
      <View style={styles.buttonContainer}>
      <Button style={styles.buttonCard} buttonColor='#96b89c' mode="contained" onPress={()=>navigation.navigate('')}>
      more
      </Button>
      <Button style={styles.buttonSave} buttonColor='#96b89c' mode="contained" onPress={()=>navigation.navigate('')}>
      saved
      </Button>
      <Text variant="bodyMedium">C</Text>
      </View>
      
    </Card.Content>
  </Card>
  </View>
  );
};

export default OfertsCard;