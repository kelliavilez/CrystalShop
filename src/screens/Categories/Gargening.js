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
    const articleId = parseInt(article.id, 10); 
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
