import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import styles from '../styles/favoriteStyles';
import { Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const FavoriteCard = ({ article }) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.rowContainer}>
              <Image
                source={{ uri: article.image }}
                style={styles.photoCard}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.nameText}>{article.productName}</Text>
                <Text style={styles.descriptionText}>{article.price}</Text>
                <Text style={styles.status}>{article.category}</Text>
              </View>
            </View>
            <Button
              mode="contained"
              buttonColor='#89c07a'
              style={styles.button}
              onPress={() => navigation.navigate('FavoriteDetailsCard', { article })}
            >
              Ver más
            </Button>
            <Button
              mode="contained"
              buttonColor='#89c07a'
              style={styles.button}
            >
              Añadido a favoritos
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

export default FavoriteCard;
