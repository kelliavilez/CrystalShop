import React from 'react';
import { View, FlatList } from 'react-native';
import styles from '../../styles/globalStyles';
import BedroomCard from '../../components/BedroomCard';
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';

const Bedroom = () => {
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
        renderItem={({ item }) => <BedroomCard article={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        key={numColumns}
      />
    </View>
  );
};

const articles = [
  {
    id: 30,
    photo: 'https://virtualmuebles.com/cdn/shop/products/61Mvw5BY_mL._AC_SL1000.jpg?v=1723040818&width=1946',
    description: 'Ropa de cama de algodón',
    price: 200000,
    characteritics: 'Color rosa',
    category: 'Dormitorio'
  },
  {
    id: 31,
    price: 40000,
    photo: 'https://www.alkosto.com/medias/7707001585767-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MzAzMnxpbWFnZS93ZWJwfGFEWTNMMmd4WlM4eE5ETTBOVFk0T0RFMU5ERTBNaTgzTnpBM01EQXhOVGcxTnpZM1h6QXdNVjgzTlRCWGVEYzFNRWd8MzJiN2U3ZjI2ZjJhYWY3MDdmZDBiNWIyYmNkYzEwYjdlNjBhNjk4NzY4OWQyZjc5NDI1N2Y1ZjNmNzJjNmQxOA',
    description: 'Conjunto de almohadas dormitorio',
    characteritics: 'Suaves',
    category: 'Dormitorio'
  },
  {
    id: 32,
    price: 60000,
    photo: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/890484/public',
    description: 'Closet de 6 puertas para dormitorio',
    characteritics: 'Gran espacio',
    category: 'Dormitorio'
  },
  {
    id: 33,
    price: 160000,
    photo: 'https://justhomecollection.com/thumb/?i=https://justhomecollection.com/wp-content/uploads/2018/02/repisa_hc.jpg&q=100&w=1000',
    description: 'Repisa para dormitorio en madera',
    characteritics: 'Guarda tus cosas aquí',
    category: 'Dormitorio'
  },
  {
    id: 34,
    price: 90000,
    photo: 'https://exitocol.vtexassets.com/arquivos/ids/14516548/lampara-infantil-diseno-reno-silicona-8018-luz-led-cambio-luces-mesa.jpg?v=637983405172300000',
    description: 'Lampara nocturna idel para niños',
    characteritics: 'Para darles mayor comfort',
    category: 'Dormitorio'
  },
  {
    id: 35,
    price: 90000,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_905183-CBT75639300399_042024-O.webp',
    description: 'Estrellas deorativas techo para niños',
    characteritics: 'Brinda el mejor espacio a tus hijos',
    category: 'Dormitorio'
  },

];

export default Bedroom;
