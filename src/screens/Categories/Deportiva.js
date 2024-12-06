import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import styles from '../../styles/globalStyles';
import SearchBar from '../../components/SearchBar';
import ArticlesCard from '../../components/ArticlesCard';
import firestore from '@react-native-firebase/firestore';

const Deportiva = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {

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
    const isInCategory = article.category.toLowerCase() === 'deportiva';
    const query = searchQuery.toLowerCase();
  
    const matchesQuery =
      article.description.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.price.toString().includes(query);
  
    return isInCategory && matchesQuery;
  });
  

  const numColumns = 2;
  return (
    <View style={styles.viewStyle}>
      <SearchBar onSearch={setSearchQuery} />
      <FlatList
        data={filteredArticles}
        renderItem={({ item }) => <ArticlesCard article={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        key={numColumns}
      />
    </View>
  );
};

export default Deportiva;

