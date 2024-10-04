import React from 'react';
import { View, FlatList } from 'react-native';
import styles from '../../styles/globalStyles';
import FoodCard from '../../components/FoodCard';
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';

const Food = () => {
  
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
    id: 36,
    photo: 'https://endulzatuvida.cl/wp-content/uploads/2023/09/img_7731-scaled-600x600.jpeg',
    description: 'Deliciosos pockys de chocolate',
    price: 20000,
    characteritics: 'Gran variedad de sabores',
    category: 'Comida'
  },
  {
    id: 37,
    price: 40000,
    photo: 'https://m.media-amazon.com/images/I/81IhoXYiXLL._SL1500_.jpg',
    description: 'Paquete de Taiyakis para compartir',
    characteritics: 'Gran variedad de sabores',
    category: 'Comida'
  },
  {
    id: 38,
    price: 15000,
    photo: 'https://www.japonalternativo.com/wp-content/uploads/2021/02/hello-panda-matcha-green-tea.jpg',
    description: 'Nuevas bebidad que debes probar',
    characteritics: 'Gran variedad de sabores',
    category: 'Comida'
  },
  {
    id: 39,
    price: 30000,
    photo: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3a321a44ebba848e30c3f104fb3d90d3/Derivates/972a83060c897675153c0e1e354c0ed3c5f4f913.jpg',
    description: 'Caja bombones de chocolate',
    characteritics: 'Gran variedad de sabores',
    category: 'Comida'
  },
  {
    id: 40,
    price: 30000,
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6-QAVhl73zwNP-J_beMdqF3ldI8d-Sw83Q&s',
    description: 'Delicioso pan artesanal',
    characteritics: 'Gran variedad de sabores',
    category: 'Comida'
  },
  {
    id: 41,
    price: 40000,
    photo: 'https://thefoodtech.com/wp-content/uploads/2020/12/demanda-creciente-de-snacks-mas-saludables.jpg',
    description: 'Snakcs saludables para tus hijos',
    characteritics: 'Gran variedad de sabores',
    category: 'Comida'
  },

];

export default Food;