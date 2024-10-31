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
    // Cargar datos de Firestore
    const fetchArticles = async () => {
      try {
        const articlesList = [];
        const querySnapshot = await firestore().collection('articles').get(); // Cambiado a 'articles'
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

/*import { View, FlatList } from "react-native";
import ArticlesCard from "../components/ArticlesCard";
import styles from "../styles/globalStyles";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import firestore from "@react-native-firebase/firestore";

function Home(navigation) {


  const [searchQuery, setSearchQuery] = useState('');

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
*/
/* 
const articles = [
  {
    id: 1,
    photo: 'https://images.sodimac.com/v3/assets/blt2f8082df109cfbfb/blt0aaa245fffee3cff/64ff8483ea4b5dfc0a511a40/LND-GC-706-SHOW-tipos-ropa-mb.jpg',
    description: 'Ropa de cama de algodón',
    price: 200000,
    characteritics: 'Color rosado',
    category: 'Dormitorio',
    statusCategory: 'Disponible - Dormitorio',
    name: 'Tendidos cama'
  },
  {
    id: 2,
    photo: 'https://blueart.com.co/cdn/shop/products/WhatsAppImage2022-01-21at10.37.47AM.jpg?v=1723680305',
    description: 'Lámpara de mesa con regulador',
    price: 70000,
    characteritics: 'Luz calida',
    category: 'Dormitorio',
    statusCategory: 'Disponible - Dormitorio',
    name: 'Lampara reguladora'
  },
  {
    id: 3,
    photo: 'https://inthermedical.com/wp-content/uploads/2021/05/memory-foam-Pillow.png',
    description: 'Almohada ortopédica, soporte espalda',
    price: 300000,
    characteritics: 'Suave',
    category: 'Dormitorio',
    statusCategory: 'Disponible - Dormitorio',
    name: 'Almohada ortopedica'
  },
  {
    id: 4,
    photo: 'https://petopet.com.co/cdn/shop/products/plato_interactivo_portada_circulo_azul_1024x1024.png?v=1627510677',
    description: 'Juguete interactivo para perros',
    price: 205000,
    characteritics: 'Color azul',
    category: 'Mascotas',
    statusCategory: 'Disponible - Mascotas',
    name: 'Juguete perros'
  },
  {
    id: 5,
    photo: 'https://ae01.alicdn.com/kf/He8e13307af2440d2a4e3d3e3d5e9926fg/Cuenco-de-comida-para-gatos-alimentador-autom-tico-dispensador-de-agua-con-almacenamiento-de-alimentos-secos.jpg',
    description: 'Comedero para mascotas',
    price: 242000,
    characteritics: 'Automatico',
    category: 'Mascotas',
    statusCategory: 'Disponible - Mascotas',
    name: 'Comedero'
  },
  {
    id: 6,
    photo: 'https://m.media-amazon.com/images/I/61+7PjVFMsS._AC_SL1500_.jpg',
    description: 'Macetas de cerámica gemelas',
    price: 208000,
    characteritics: 'Blanca y negra',
    category: 'Jardineria',
    statusCategory: 'Disponible - Mascotas',
    name: 'Macetas'
  }
];*/
