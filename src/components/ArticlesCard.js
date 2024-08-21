import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/globalStyles';

const   ArticlesCard = ({ article }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image source={{ uri: article.photo }} style={styles.photo} />
      <Text style={styles.name}>Nombre Mascota: {article.name}</Text>
      <Text>Raza: {article.race}</Text>
      <Text>Tipo: {article.type}</Text>
      <Text>Edad: {article.age}</Text>
      <Text>Propietario: {article.person}</Text>
      <Text>Veterinario: {article.vet}</Text>

      <Button
        title="Comprar"
        style={styles.button}
        onPress={() => navigation.navigate('')}
      />
    </View>
  );
};

export default ArticlesCard;