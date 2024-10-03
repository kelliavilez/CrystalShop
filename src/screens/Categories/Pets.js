import React from 'react';
import { View, Text, Image, Button, FlatList  } from 'react-native';
import styles from '../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import BedroomCard from '../../components/BedroomCard';
import GardeningCard from '../../components/GardeningCard';
import PetsCard from '../../components/PetsCard';
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';

const Pets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredArticles = articles.filter((article) =>
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const numColumns = 2;
    return (
      <View style={styles.viewStyle}>
        <SearchBar onSearch={setSearchQuery}/>
        <FlatList
          data={filteredArticles}
          renderItem={({ item }) => <PetsCard article={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          key={numColumns}
        />
      </View>
    );
  };

  const articles = [
    {
      id: 1,
      photo: 'https://down-co.img.susercontent.com/file/45fe1c7645daf165e597efa384460d88',
      description: 'Saco para perros pequeños',  
      price: 20000,
      characteritics: 'Tela suave para el frio'
    },
    {
      id: 2,
      price: 40000,
      photo: 'https://www.juguetesparamismascotas.com/images/juguetes/perros/foto_primera/sandalias-de-verano-fresher-para-perros_pr.webp',
      description: 'Zapatitos para tu amigo perruno',
      characteritics: 'Para el cuidado de sus patas'
    },
    {
      id: 3,
      price: 15000,
      photo: 'https://http2.mlstatic.com/D_NQ_NP_2X_649063-MCO73052321871_112023-T.webp',
      description: 'Juguete masticable para perro',
      characteritics: 'Maneja la ansiedad de tú mascota'
    },
    {
      id: 4,
      price: 30000,
      photo: 'https://megashoptv.vteximg.com.br/arquivos/ids/167696-900-900/Combo-4-Juguetes-Perros-Mascotas-Grandes-pelotas-dispensador-hueso1.jpg?v=638343830954530000',
      description: 'Set juguetes masticables perros',
      characteritics: 'Juguetes varios'
    },
    {
      id: 5,
      price: 30000,
      photo: 'https://virtualmuebles.com/cdn/shop/products/71I6hgzNZeL._AC_SL1000.jpg?v=1723037443',
      description: 'Peleuches para tu mascota',
      characteritics: 'Varios estilos'
    },
    {
      id: 6,
      price: 40000,
      photo: 'https://virtualmuebles.com/cdn/shop/products/71m9Bgw-ZmL._AC_SL1500.jpg?v=1723034227',
      description: 'Juguete entretenido para gatos',
      characteritics: 'Los mantiene activos'
    },
    
  ];

  export default Pets;
  