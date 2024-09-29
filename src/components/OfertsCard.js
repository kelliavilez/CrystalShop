import React from 'react';
import { View, Image} from 'react-native';
import styles from '../styles/ofertsStyles';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Text, IconButton } from 'react-native-paper';


const   OfertsCard = ({ article }) => {

  const navigation=useNavigation();


  const discountAmount = (article.originalPrice * article.discount) / 100;
  const finalPrice = article.originalPrice - discountAmount;

  return (
    <View>
    <Card style={styles.OfertsCard}>
    <Card.Content>
      <View style={styles.container}>
      <Image source={{ uri: article.photo }} style={styles.photoCard } />
      <View style={styles.textContainer}>
      <View style={styles.price}>
      <Text style={styles.originalPrice} variant="bodySmall">{article.originalPrice.toLocaleString()}</Text>
      <Text style={styles.finalPrice} variant="bodySmall">${finalPrice.toLocaleString()}</Text>
      <Text style={styles.discount} variant="bodySmall">-{article.discount}%</Text>
      </View>
      <Text variant="bodySmall">{article.category}</Text>
      <Text variant="titleMedium" >{article.name}</Text>
      <Text variant="bodySmall">{article.description}</Text>
      </View>
      </View>
      <View style={styles.buttonContainer}>
      <Button style={styles.buttonMore} buttonColor='#96b89c' mode="contained" onPress={() => navigation.navigate('OfertsDetailsCard', { article })}>
      Mas
      </Button>
      <Button style={styles.buttonSave} buttonColor='#96b89c' mode="contained" onPress={()=>navigation.navigate('')}>
      Guardado
      </Button>
      </View>
      
    </Card.Content>
  </Card>
  </View>
  );
};

export default OfertsCard;