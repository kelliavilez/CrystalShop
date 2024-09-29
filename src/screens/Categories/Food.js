import React from 'react';
import { View, Text, Image, Button, FlatList  } from 'react-native';
import styles from '../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import BedroomCard from '../../components/BedroomCard';
import GardeningCard from '../../components/GardeningCard';
import FoodCard from '../../components/FoodCard';
import SearchBar from '../../components/SearchBar';

const Food = () => {
  const numColumns = 2;
    return (
      <View style={styles.viewStyle}>
        <SearchBar/>
        <FlatList
          data={articles}
          renderItem={({ item }) => <FoodCard article={item} />}
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
      photo: 'https://endulzatuvida.cl/wp-content/uploads/2023/09/img_7731-scaled-600x600.jpeg',
      description: 'Deliciosos pockys de chocolate',  
      price: 20000,
      characteritics: 'Gran variedad de sabores'
    },
    {
      id: 2,
      price: 40000,
      photo: 'https://m.media-amazon.com/images/I/81IhoXYiXLL._SL1500_.jpg',
      description: 'Paquete de Taiyakis para compartir',
      characteritics: 'Gran variedad de sabores'
    },
    {
      id: 3,
      price: 15000,
      photo: 'https://www.japonalternativo.com/wp-content/uploads/2021/02/hello-panda-matcha-green-tea.jpg',
      description: 'Nuevas bebidad que debes probar',
      characteritics: 'Gran variedad de sabores'
    },
    {
      id: 4,
      price: 30000,
      photo: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3a321a44ebba848e30c3f104fb3d90d3/Derivates/972a83060c897675153c0e1e354c0ed3c5f4f913.jpg',
      description: 'Caja bombones de chocolate',
      characteritics: 'Gran variedad de sabores'
    },
    {
      id: 5,
      price: 30000,
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6-QAVhl73zwNP-J_beMdqF3ldI8d-Sw83Q&s',
      description: 'Delicioso pan artesanal',
      characteritics: 'Gran variedad de sabores'
    },
    {
      id: 6,
      price: 40000,
      photo: 'https://thefoodtech.com/wp-content/uploads/2020/12/demanda-creciente-de-snacks-mas-saludables.jpg',
      description: 'Snakcs saludables para tus hijos',
      characteritics: 'Gran variedad de sabores'
    },
    
  ];

  export default Food;