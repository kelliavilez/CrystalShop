import React from 'react';
import { View, FlatList } from 'react-native';
import styles from '../styles/globalStyles';
import OfertsCard from "../components/OfertsCard";
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

const Oferts = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter((article) =>
    article.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <View style={styles.viewStyle}>
      <SearchBar onSearch={setSearchQuery} />
      <FlatList
        data={filteredArticles}
        renderItem={({ item }) => <OfertsCard article={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const articles = [
  {
    id: 7,
    originalPrice: 200000,
    discount: 20,
    photo: 'https://catmajestic.com/wp-content/uploads/2023/04/Rascador-para-gatos-fingerprint-1000x1000.jpg',
    name: 'Rascador Gatos',
    description: 'Ideal para mantener las uñas de tu gato afiladas y evitar que rasguñe tus muebles.',
    category: 'Mascotas'
  },
  {
    id: 8,
    originalPrice: 40000,
    discount: 5,
    photo: 'https://cdnx.jumpseller.com/vive-rosa-vive-jardin1/image/29406919/resize/800/800?1668354944',
    name: 'Macetas de cerámica',
    description: 'Perfectas para plantar flores o hierbas en interiores o exteriores.',
    category: 'Jardineria'
  },
  {
    id: 9,
    originalPrice: 60000,
    discount: 30,
    photo: 'https://m.maccosmetics.com.co/media/export/cms/products/640x600/mac_sku_M66Y03_640x600_0.jpg',
    name: 'Delineador waterproof',
    description: 'Perfecto para una aplicación precisa y duradera durante todo el día.',
    category: 'Maquillaje'
  },
  {
    id: 10,
    originalPrice: 160000,
    discount: 35,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_713947-MCO45035432163_022021-O.webp',
    name: 'Almohada ortopédica',
    description: 'Diseñada para proporcionar soporte adecuado para el cuello y la cabeza.',
    category: 'Dormitorio'
  },
  {
    id: 11,
    originalPrice: 90000,
    discount: 60,
    photo: 'https://www.proveedores.com/articulos/wp-content/uploads/2016/02/chocolate-gourmet-2.jpg',
    name: 'Chocolates gourmet',
    description: 'Ideal para mantener las uñas de tu gato afiladas y evitar que rasguñe tus muebles.',
    category: 'Comida'
  }
];

export default Oferts;
