import React from 'react';
import { View, Text, Image, Button, FlatList  } from 'react-native';
import styles from '../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import BedroomCard from '../../components/BedroomCard';
import GardeningCard from '../../components/GardeningCard';
import FoodCard from '../../components/FoodCard';
import MakeupCard from '../../components/MakeupCard';
import SearchBar from '../../components/SearchBar';

const Makeup = () => {
  const numColumns = 2;
    return (
      <View style={styles.viewStyle}>
        <SearchBar/>
        <FlatList
          data={articles}
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
      id: 1,
      photo: 'https://www.blog.cazcarra.com/wp-content/uploads/2014/07/pruebalabiales1.jpg',
      description: 'Hermoso kit de labiales gama rojo',  
      price: 20000,
      characteritics: 'Hidratantes'
    },
    {
      id: 2,
      price: 40000,
      photo: 'https://www.cdnperfumes.com/blog/wp-content/uploads/2019/01/componentes-productos-maquillaje.jpg',
      description: 'Set de polvos traslucidos',
      characteritics: 'Para una piel perfecta'
    },
    {
      id: 3,
      price: 15000,
      photo: 'https://www.mgmmakeupschool.com/images/cajas-inicio/PRODUCTOS-MAQUILLAJE-ROSTRO.png',
      description: 'Brocha mas corrector economicos',
      characteritics: 'Facil de llevar en tu bolso'
    },
    {
      id: 4,
      price: 30000,
      photo: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/02/01/16752540269037.jpg',
      description: 'Pequeño polvo para llevar en tu bolso',
      characteritics: 'No ocupa mucho espacio'
    },
    {
      id: 5,
      price: 30000,
      photo: 'https://www.instyle.es/medio/2018/04/10/3_0a1dd183.jpg',
      description: 'Sombra para cejas de larga duración',
      characteritics: 'Para un look de larga duración'
    },
    {
      id: 6,
      price: 40000,
      photo: 'https://imagenes.elpais.com/resizer/v2/TQQGOPSIUNHVTM7QXRTX3K7HVA.png?auth=6ebde73b7eb76135cf3ba8116eaa73a7eb2d204f13a706ce11af51917c557143&width=1960',
      description: 'Corrector para ojeras maybelline',
      characteritics: 'No comodogenico'
    },
    
  ];

  export default Makeup;
  