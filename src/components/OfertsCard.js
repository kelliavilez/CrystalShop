import React from 'react';
import { View, Image} from 'react-native';
import styles from '../styles/globalStyles';
import ArticlesDetails from './ArticlesDetails'
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Text, IconButton } from 'react-native-paper';


const   OfertsCard = ({ ofert }) => {

  const navigation=useNavigation();

  return (
    <View>
    <Card style={styles.card}>
    <Card.Content>
      <Image source={{ uri: ofert.photo }} style={styles.photo} />
      <Text variant="bodySmall" >{ofert.name}</Text>   
      <Text variant="titleSmall" >Card title</Text>
      <Text>{ofert.race}</Text>
      <Button buttonColor='#96b89c' mode="contained" onPress={()=>navigation.navigate('')}>
      Ver mas
      </Button>
    </Card.Content>
  </Card>
  </View>
  );
};

export default OfertsCard;