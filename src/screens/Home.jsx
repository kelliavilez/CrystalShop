import { View, FlatList } from "react-native";
import ArticlesCard from "../components/ArticlesCard";
import styles from "../styles/globalStyles";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import firestore from '@react-native-firebase/firestore';

function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Cargar datos filtrados desde Firestore
    const fetchArticles = async () => {
      try {
        const articlesList = [];
        const querySnapshot = await firestore()
          .collection('articles')
          .where('category', 'in', ['oversize', 'formal', 'casual', 'deportiva']) // Filtrar categorías específicas
          .get();
          
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
    const query = searchQuery.toLowerCase();
    const matchesDescription = article.description.toLowerCase().includes(query);
    const matchesCategory = article.category.toLowerCase().includes(query);
    const matchesPrice = article.price.toString().includes(query);
    return matchesDescription || matchesCategory || matchesPrice;
  });

  const numColumns = 2;

  const handleNavigateToDetails = (article) => {
    navigation.navigate('ArticleDetailsCard', { article });
  };

  return (
    <View style={styles.viewStyle}>
      <SearchBar onSearch={setSearchQuery} />
      <FlatList
        data={filteredArticles}
        renderItem={({ item }) =>
          <ArticlesCard
            article={item}
            onPress={() => handleNavigateToDetails(item)}
          />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        key={numColumns}
      />
    </View>
  );
}

export default Home;

