import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import styles from '../../styles/globalStyles';
import BedroomCard from '../../components/BedroomCard';
import SearchBar from '../../components/SearchBar';
import firestore from '@react-native-firebase/firestore';

const Gardening = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Cargar datos de Firestore
    const fetchArticles = async () => {
      try {
        const articlesList = [];
        const querySnapshot = await firestore().collection('articles').get();
        querySnapshot.forEach((doc) => {
          articlesList.push({ id: doc.id, ...doc.data() });
        });
        setArticles(articlesList);
      } catch (error) {
        console.error("Error al obtener artículos: ", error);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter((article) => {
    const articleId = parseInt(article.id, 10); // Convierte el ID a número si es necesario
    const isInRange = articleId >= 18 && articleId <= 23;

    const query = searchQuery.toLowerCase();
    const matchesDescription = article.description.toLowerCase().includes(query);
    const matchesCategory = article.category.toLowerCase().includes(query);
    const matchesPrice = article.price.toString().includes(query); 

    return isInRange && (matchesDescription || matchesCategory || matchesPrice);
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

export default Gardening;

/*import React from 'react';
import { View, FlatList } from 'react-native';
import styles from '../../styles/globalStyles';
import GardeningCard from '../../components/GardeningCard';
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';

const Gardening = () => {
  
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
        renderItem={({ item }) => <GardeningCard article={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        key={numColumns}
      />
    </View>
  );
};

const articles = [
  {
    id: 18,
    photo: 'https://cdnx.jumpseller.com/vive-rosa-vive-jardin1/image/38253413/resize/1200/1200?1691248496',
    description: 'Lindas macetas para decorar interiores',
    price: 150000,
    characteritics: 'Distintos diseños',
    category: 'Jargineria',
    statusCategory: 'Disponible - Jardineria',
    name: 'Macetas'
  },
  {
    id: 19,
    price: 40000,
    photo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/e4fc9dc2-f136-4da4-8407-9a2f3a292573.f43ac6ef31641830e1480944cbaecc96.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    description: 'La regadera perfecta para tú jardin',
    characteritics: 'Cuida tus plantas',
    category: 'Jargineria',
    statusCategory: 'Disponible - Jardineria',
    name: 'Regadera'
  },
  {
    id: 20,
    price: 60000,
    photo: 'https://mundodotaciones.com/wp-content/uploads/2022/03/kit-de-jardineria.png',
    description: 'Set materiales para jardineria',
    characteritics: 'Manten tú jardin en buen estado',
    category: 'Jargineria',
    statusCategory: 'No disponible - Jardineria',
    name: 'Materiales jardineria'
  },
  {
    id: 21,
    price: 160000,
    photo: 'https://www.aquacentro.com/images/jardineria-piscinas-valencia-3.jpg',
    description: 'Set materiales para jardineria',
    characteritics: 'Cuidado de tú patio',
    category: 'Jargineria',
    statusCategory: 'No disponible - Jardineria',
    name: 'Materiales jardineria'
  },
  {
    id: 22,
    price: 300000,
    photo: 'https://cdn.relaxdays.com/media/catalog/category/Gew_chsh_user.jpg',
    description: 'Pequeña malla para tus plantas',
    characteritics: 'Para evitar plagas',
    category: 'Jargineria',
    statusCategory: 'Disponible - Jardineria',
    name: 'Malla plantas'
  },
  {
    id: 23,
    price: 1000000,
    photo: 'https://todocesped.es/wp-content/uploads/2023/04/costes-de-material-cesped-natural.jpg',
    description: 'Podadora jardin',
    characteritics: 'Evita el cesped largo',
    category: 'Jargineria',
    statusCategory: 'Disponible - Jardineria',
    name: 'Podadora'
  },

];

export default Gardening;*/