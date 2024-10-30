import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import styles from '../../styles/globalStyles';
import BedroomCard from '../../components/BedroomCard';
import SearchBar from '../../components/SearchBar';
import firestore from '@react-native-firebase/firestore';

const Pets = () => {
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
    const isInRange = articleId >= 12 && articleId <= 17;

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

export default Pets;
/*import React from 'react';
import { View, FlatList } from 'react-native';
import styles from '../../styles/globalStyles';
import PetsCard from '../../components/PetsCard';
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';

const Pets = () => {
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
    id: 12,
    photo: 'https://down-co.img.susercontent.com/file/45fe1c7645daf165e597efa384460d88',
    description: 'Saco para perros pequeños',
    price: 20000,
    characteritics: 'Tela suave para el frio',
    category: 'Mascotas',
    statusCategory: 'No disponible - Mascotas',
    name: 'Ropa perros'
  },
  {
    id: 13,
    price: 40000,
    photo: 'https://www.juguetesparamismascotas.com/images/juguetes/perros/foto_primera/sandalias-de-verano-fresher-para-perros_pr.webp',
    description: 'Zapatitos para tu amigo perruno',
    characteritics: 'Para el cuidado de sus patas',
    category: 'Mascotas',
    statusCategory: 'Disponible - Mascotas',
    name: 'Zapatos perros'
  },
  {
    id: 14,
    price: 15000,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_2X_649063-MCO73052321871_112023-T.webp',
    description: 'Juguete masticable para perro',
    characteritics: 'Maneja la ansiedad de tú mascota',
    category: 'Mascotas',
    statusCategory: 'Disponible - Mascotas',
    name: 'Juguete perros'
  },
  {
    id: 15,
    price: 30000,
    photo: 'https://megashoptv.vteximg.com.br/arquivos/ids/167696-900-900/Combo-4-Juguetes-Perros-Mascotas-Grandes-pelotas-dispensador-hueso1.jpg?v=638343830954530000',
    description: 'Set juguetes masticables perros',
    characteritics: 'Juguetes varios',
    category: 'Mascotas',
    statusCategory: 'Disponible - Mascotas',
    name: 'Juguetes perros'
  },
  {
    id: 16,
    price: 30000,
    photo: 'https://virtualmuebles.com/cdn/shop/products/71I6hgzNZeL._AC_SL1000.jpg?v=1723037443',
    description: 'Peluches para tu mascota',
    characteritics: 'Varios estilos',
    category: 'Mascotas',
    statusCategory: 'Disponible - Mascotas',
    name: 'Peluches para mascotas'
  },
  {
    id: 17,
    price: 40000,
    photo: 'https://virtualmuebles.com/cdn/shop/products/71m9Bgw-ZmL._AC_SL1500.jpg?v=1723034227',
    description: 'Juguete entretenido para gatos',
    characteritics: 'Los mantiene activos',
    category: 'Mascotas',
    statusCategory: 'Disponible - Mascotas',
    name: 'Juguete gatos'
  },

];

export default Pets;
*/