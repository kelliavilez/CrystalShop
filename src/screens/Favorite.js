import React from 'react';
import { View, FlatList } from 'react-native';
import styles from '../styles/globalStyles';
import FavoriteCard from "../components/FavoriteCard"; // Asegúrate de que la ruta sea correcta

const Favorite = () => {
  return (
    <View style={styles.viewStyle}>
      <FlatList
        data={oferts}
        renderItem={({ item }) => <FavoriteCard ofert={item} />} // Asegúrate de que el prop "ofert" es esperado en FavoriteCard
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const oferts = [
  {
    id: 1,
    discount: 20,
    photo: 'https://catmajestic.com/wp-content/uploads/2023/04/Rascador-para-gatos-fingerprint-1000x1000.jpg',
    name: 'Rascador Gatos',
    description: 'Ideal para mantener las uñas de tu gato afiladas y evitar que rasguñe tus muebles.',
    statusCategory: 'Disponible - Mascotas',
  },
  {
    id: 2,
    discount: 5,
    photo: 'https://cdnx.jumpseller.com/vive-rosa-vive-jardin1/image/29406919/resize/800/800?1668354944',
    name: 'Macetas de cerámica',
    description: 'Perfectas para plantar flores o hierbas en interiores o exteriores.',
    statusCategory: 'Disponible - Jardineria',
  },
  {
    id: 3,
    discount: 30,
    photo: 'https://m.maccosmetics.com.co/media/export/cms/products/640x600/mac_sku_M66Y03_640x600_0.jpg',
    name: 'Delineador waterproof',
    description: 'Perfecto para una aplicación precisa y duradera durante todo el día.',
    statusCategory: 'Disponible - Maquillaje',
  },
  {
    id: 4,
    discount: 35,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_713947-MCO45035432163_022021-O.webp',
    name: 'Almohada ortopédica',
    description: 'Diseñada para proporcionar soporte adecuado para el cuello y la cabeza.',
    statusCategory: 'Disponible - Dormitorio',
  },
];

export default Favorite;
