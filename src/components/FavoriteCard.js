import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/favoriteStyles';
import { Card, Text as PaperText, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const FavoriteCard = ({ article }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
          <View style={styles.rowContainer}>
            <Image
              source={{ uri: article.image }}
              style={styles.photoCard}
            />
            <View style={styles.infoContainer}>
              <PaperText style={styles.nameText} variant="titleLarge">
                {article.productName}
              </PaperText>
              <PaperText style={styles.descriptionText} variant="bodyMedium">
                {article.description}
              </PaperText>
              <PaperText style={styles.status} variant="bodyMedium">
                {article.category}
              </PaperText>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              buttonColor="#FF7F00"
              style={styles.button}
              onPress={() => navigation.navigate('FavoriteDetailsCard', { article })}
            >
              Ver más
            </Button>
            <Button
              mode="contained"
              buttonColor="#89c07a"
              style={styles.button}
            >
              Añadido a favoritos
            </Button>
          </View>
      </Card>
    </View>
  );
};

export default FavoriteCard;
