import React from 'react';
import { View, FlatList } from 'react-native';
import styles from '../../styles/globalStyles';
import MakeupCard from '../../components/MakeupCard';
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';

const Makeup = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter((article) => {
    
    const query = searchQuery.toLowerCase();

    const matchesDescription = article.description.toLowerCase().includes(query);
    const matchesCategory = article.category.toLowerCase().includes(query);
    const matchesPrice = article.price.toString().includes(query); 
    return matchesDescription || matchesCategory || matchesPrice;
  
  });

  const numColumns = 2;
  
  return (
    <View style={styles.viewStyle}>
      <SearchBar onSearch={setSearchQuery} />
      <FlatList
        data={filteredArticles}
        renderItem={({ item }) => <MakeupCard article={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        key={numColumns}
      />
    </View>
  );
};

const articles = [
  {
    id: 24,
    photo: 'https://www.blog.cazcarra.com/wp-content/uploads/2014/07/pruebalabiales1.jpg',
    description: 'Hermoso kit de labiales gama rojo',
    price: 20000,
    characteritics: 'Hidratantes',
    category: 'Maquillaje',
    statusCategory: 'Disponible - Maquillaje',
    name: 'Labiales'
  },
  {
    id: 25,
    price: 40000,
    photo: 'https://www.cdnperfumes.com/blog/wp-content/uploads/2019/01/componentes-productos-maquillaje.jpg',
    description: 'Set de polvos traslucidos',
    characteritics: 'Para una piel perfecta',
    category: 'Maquillaje',
    statusCategory: 'Disponible - Maquillaje',
    name: 'Polvos'
  },
  {
    id: 26,
    price: 15000,
    photo: 'https://www.mgmmakeupschool.com/images/cajas-inicio/PRODUCTOS-MAQUILLAJE-ROSTRO.png',
    description: 'Brocha mas corrector economicos',
    characteritics: 'Facil de llevar en tu bolso',
    category: 'Maquillaje',
    statusCategory: 'No disponible - Maquillaje',
    name: 'Brocha y corrector'
  },
  {
    id: 27,
    price: 30000,
    photo: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/02/01/16752540269037.jpg',
    description: 'Pequeño polvo para llevar en tu bolso',
    characteritics: 'No ocupa mucho espacio',
    category: 'Maquillaje',
    statusCategory: 'Disponible - Maquillaje',
    name: 'Polvo pequeño'
  },
  {
    id: 28,
    price: 30000,
    photo: 'https://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg',
    description: 'Sombra para cejas de larga duración',
    characteritics: 'Para un look de larga duración',
    category: 'Maquillaje',
    statusCategory: 'Disponible - Maquillaje',
    name: 'Sombra cejas'
  },
  {
    id: 29,
    price: 40000,
    photo: 'https://imagenes.elpais.com/resizer/v2/TQQGOPSIUNHVTM7QXRTX3K7HVA.png?auth=6ebde73b7eb76135cf3ba8116eaa73a7eb2d204f13a706ce11af51917c557143&width=1960',
    description: 'Corrector para ojeras maybelline',
    characteritics: 'No comodogenico',
    category: 'Maquillaje',
    statusCategory: 'Disponible - Maquillaje',
    name: 'Corrector ojos'
  },

];

export default Makeup;
