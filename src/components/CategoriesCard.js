import React from 'react';
import { View, Image, Pressable } from 'react-native';
import styles from '../styles/categoryStyles';
import { useNavigation } from '@react-navigation/native';
import { Card, Text } from 'react-native-paper';


const CategoriesCard = ({ category }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text variant="titleMedium">{category.name}</Text>
      <Pressable onPress={() => navigation.navigate(category.route)}>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.photo}>
              <Image source={{ uri: category.photo }} style={styles.photo} />
            </View>
          </Card.Content>
        </Card>
      </Pressable>
    </View>
  );
};

export default CategoriesCard;