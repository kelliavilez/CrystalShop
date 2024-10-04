import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Text } from 'react-native-paper';

const CategoryPerCard = ({ article }) => {

  const navigation = useNavigation();

  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <Image source={{ uri: article.photo }} style={styles.photosHome} />
          <Text variant="bodySmall" >{article.description}</Text>
          <Button style={styles.buttonHome} labelStyle={styles.buttonTextHome} buttonColor='#96b89c' mode="contained" onPress={() => navigation.navigate('ArticlesDetails')}>
            Elegir
          </Button>
        </Card.Content>
      </Card>
    </View>

  );
};

export default CategoryPerCard;