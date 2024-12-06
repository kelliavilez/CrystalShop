import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { AppContext } from '../context/AppContext';
import firestore from '@react-native-firebase/firestore';
import ArticlesCard from "../components/ArticlesCard";  // Usamos ArticlesCard en lugar de SuggestionCard
import styles from '../styles/globalStyles';

const Suggestions = () => {
    const { state } = useContext(AppContext); // Estado global con los artículos favoritos del usuario
    const [allArticles, setAllArticles] = useState([]);
    const [favoriteArticles, setFavoriteArticles] = useState([]);
    const [recommendedArticles, setRecommendedArticles] = useState([]);
    const [numColumns, setNumColumns] = useState(2);  // Establecer el número de columnas

    // Obtener todos los artículos disponibles desde Firestore
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const snapshot = await firestore().collection('articles').get();
                const articlesData = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setAllArticles(articlesData);
            } catch (error) {
                console.error("Error obteniendo artículos:", error);
            }
        };

        fetchArticles();
    }, []);

    // Obtener los favoritos del usuario desde Firestore
    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const snapshot = await firestore().collection('favorites').get();
                const favoritesData = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setFavoriteArticles(favoritesData);
            } catch (error) {
                console.error("Error obteniendo favoritos:", error);
            }
        };

        fetchFavorites();
    }, []);

    // Sincronizar favoritos y hacer recomendaciones
    useEffect(() => {
        if (favoriteArticles.length > 0 && allArticles.length > 0) {
            recommendArticles();
        }
    }, [favoriteArticles, allArticles]);

    // Función para comparar las descripciones basadas en palabras clave
    const compareDescriptions = (article, favorite) => {
        if (article.description && favorite.description) {
            const articleWords = article.description.toLowerCase().split(' ');
            const favoriteWords = favorite.description.toLowerCase().split(' ');

            // Contar las coincidencias de palabras clave entre las descripciones
            let matchCount = 0;
            articleWords.forEach(word => {
                if (favoriteWords.includes(word)) {
                    matchCount += 1;
                }
            });

            // Si encontramos al menos 2 coincidencias de palabras clave, consideramos que es una buena coincidencia
            return matchCount >= 2;
        }
        return false;
    };

    // Función para recomendar artículos basados en las palabras clave de los favoritos
    const recommendArticles = () => {
        // Filtrar artículos con palabras clave similares a los favoritos
        const filteredArticles = allArticles.filter((article) => {
            // Comprobar si el artículo no está en los favoritos
            const isFavorite = favoriteArticles.some(favorite => favorite.id === article.id);

            // Si no es un favorito y tiene palabras clave similares a uno de los favoritos
            return !isFavorite && favoriteArticles.some(favorite => compareDescriptions(article, favorite));
        });

        // Seleccionar 10 artículos aleatorios de los filtrados
        const randomArticles = getRandomArticles(filteredArticles, 10);

        setRecommendedArticles(randomArticles);
    };

    // Función para seleccionar N artículos aleatorios
    const getRandomArticles = (articles, count) => {
        const shuffled = articles.sort(() => 0.5 - Math.random()); // Mezclar el array
        return shuffled.slice(0, count); // Seleccionar los primeros N artículos
    };

    return (
        <View style={styles.viewStyle}>
            {recommendedArticles.length > 0 ? (
                <FlatList
                    data={recommendedArticles}
                    renderItem={({ item }) => <ArticlesCard article={item} />}  
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={numColumns}  // Esto asegura que los artículos se muestren en 2 columnas
                    columnWrapperStyle={{ justifyContent: 'space-between' }} // Espaciado entre columnas
                    key={numColumns}  // Cambiar key cuando cambiamos el número de columnas
                />
            ) : (
                <Text style={styles.subtitleLog}>No hay sugerencias disponibles.</Text>
            )}
        </View>
    );
};

export default Suggestions;






