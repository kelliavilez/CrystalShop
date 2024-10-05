import React from 'react';
import { View, FlatList } from 'react-native';
import styles from '../styles/globalStyles';
import OfertsCard from "../components/OfertsCard";
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

const Oferts = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter((article) => {
    const query = searchQuery.toLowerCase();

    const discountedPrice = article.originalPrice - (article.originalPrice * (article.discount / 100));

    const matchesName = article.name.toLowerCase().includes(query);
    const matchesDescription = article.description.toLowerCase().includes(query);
    const matchesCategory = article.category.toLowerCase().includes(query);
    const matchesDiscountedPrice = discountedPrice.toString().includes(query); 

    return matchesName || matchesDescription || matchesCategory || matchesDiscountedPrice;
  });
  
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
    description: 'Ideal para mantener las uñas de tu gato afiladas sin dañar tus cosas',
    category: 'Mascotas',
    statusCategory: 'Disponible - Mascotas',
    characteritics: 'Blanca y negra',
  },
  {
    id: 8,
    originalPrice: 40000,
    discount: 5,
    photo: 'https://cdnx.jumpseller.com/vive-rosa-vive-jardin1/image/29406919/resize/800/800?1668354944',
    name: 'Macetas de cerámica',
    description: 'Perfectas para plantar en interiores o exteriores.',
    category: 'Jardineria',
    statusCategory: 'Disponible - Jardineria'
  },
  {
    id: 9,
    originalPrice: 60000,
    discount: 30,
    photo: 'https://m.maccosmetics.com.co/media/export/cms/products/640x600/mac_sku_M66Y03_640x600_0.jpg',
    name: 'Delineador waterproof',
    description: 'Perfecto para una aplicación precisa',
    category: 'Maquillaje',
    statusCategory: 'Disponible - Maquillaje'
  },
  {
    id: 10,
    originalPrice: 160000,
    discount: 35,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_713947-MCO45035432163_022021-O.webp',
    name: 'Almohada ortopédica',
    description: 'Diseñada para proporcionar soporte adecuado',
    category: 'Dormitorio',
    statusCategory: 'Disponible - Dormitorio'
  },
  {
    id: 11,
    originalPrice: 90000,
    discount: 60,
    photo: 'https://www.proveedores.com/articulos/wp-content/uploads/2016/02/chocolate-gourmet-2.jpg',
    name: 'Chocolates gourmet',
    description: 'Sabor que perdura',
    category: 'Comida',
    statusCategory: 'Disponible - Comida'
  }
];

export default Oferts;
