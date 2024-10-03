import React from 'react';
import { View, Image} from 'react-native';
import styles from '../styles/BoughtStyles';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Text, IconButton } from 'react-native-paper';


const   BoughtsCard = ({ article }) => {

  const navigation=useNavigation();

  return (
    <View>
    <Card style={styles.card}>
    <Card.Content>
      <View style={styles.container}>
      <Image source={{ uri: article.photo }} style={styles.photo } />
      <View style={styles.textContainer}>
      <Text variant="bodySmall">{article.category}</Text>
      <Text variant="bodySmall">{article.description}</Text>
      </View>
      </View>
      <View style={styles.buttonContainer}>
      <Button style={styles.buttonState} buttonColor='#96b89c' mode="contained">
      {article.state}
      </Button>
      </View>
      
    </Card.Content>
  </Card>
  </View>
  );
};

export default BoughtsCard;