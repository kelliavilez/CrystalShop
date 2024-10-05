import React, { useState, useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from '../styles/globalStyles';
import { AppContext } from '../context/AppContext';
import BoughtsCard from '../components/BoughtsCard';
import SearchBar from '../components/SearchBar';

const MyBoughts = () => {
  const { state } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBoughts = (state.boughts?.boughtsItems || []).filter((item) =>
    item.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.viewStyle}>
      <SearchBar onSearch={setSearchQuery} />
      {filteredBoughts.length > 0 ? (
        <FlatList
          data={filteredBoughts}
          renderItem={({ item }) => <BoughtsCard article={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.subtitleLog}>No tienes compras</Text>
      )}
    </View>
  );
};

export default MyBoughts;

const articles = [
  {
    id: 46,
    photo: 'https://cdnx.jumpseller.com/vive-rosa-vive-jardin1/image/38252836/resize/800/800?1691160167',
    description: 'Hermoso juego de macetas de ceramica con diseños de animales: cebra, zorro, vaca, mapache, gato, entre otros varios',
    state: 'Entregado',
    category: 'Jargineria'

  },
  {
    id: 47,
    photo: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/40/564/XXL_p0208456440.jpg',
    description: 'Hermoso blush tono rosado , con alta duracion y pigmento, perfecto para toca ocasion, nuevo diseño con aplicador',
    state: 'Cancelado',
    category: 'Maquillaje'
  },
  {
    id: 48,
    photo: 'https://lencicol.com/wp-content/uploads/2023/09/AnyConv.com__Juego-de-Sabana-Azul-Oscuro-25cm-Altura-01.webp',
    description: 'Juego de cama azul oscuro noche, perfecto para dar un toque elegante a tú habitacion y elevar tú espacio',
    state: 'Pendiente',
    category: 'Dormitorio'
  }
];

