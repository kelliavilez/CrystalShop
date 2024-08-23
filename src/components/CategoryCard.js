import React from 'react';
import { View, Image} from 'react-native';
import styles from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Text, IconButton } from 'react-native-paper';
import ArticlesCategory from '../screens/ArticlesCategory';


const   CategoryCard = ({ category }) => {

  const navigation=useNavigation();

  return (
    <View>
    <Card style={styles.cardCategory}>
    <Card.Content>
      <Image source={{ uri: category.photo }} style={styles.categoryPhoto} />
      <Text variant="bodySmall" >{category.name}</Text>   
    </Card.Content>
  </Card>
  </View>
  );
};

export default CategoryCard;