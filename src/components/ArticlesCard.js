import React from 'react';
import { View, Image} from 'react-native';
import styles from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Text, IconButton } from 'react-native-paper';

const   ArticlesCard = ({ article }) => {

  const navigation=useNavigation();

  return (
    <View>
    <Card style={styles.card}>
    <Card.Content>
      <Image source={{ uri: article.photo }} style={styles.photo} />
      <Text variant="titleSmall" >Card title</Text>
      <Text variant="bodySmall" >{article.description}</Text>   
      <Button buttonColor='#96b89c' mode="contained" onPress={()=>navigation.navigate('ArticlesDetails')}>
      Ver mas
      </Button>
    </Card.Content>
    </Card>
    </View>
    
  );
};

export default ArticlesCard;