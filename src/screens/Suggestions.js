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

    const compareAttributes = (article, favorite) => {
        const getMatches = (str1, str2) => {
            const words1 = str1?.toLowerCase().split(' ') || [];
            const words2 = str2?.toLowerCase().split(' ') || [];
            return words1.filter(word => words2.includes(word)).length;
        };

        // Contar coincidencias en descripción, características y categoría
        const descriptionMatches = getMatches(article.description, favorite.description) >= 2;
        const characteristicsMatches = getMatches(article.characteristics, favorite.characteristics) >= 2;
        const categoryMatches = article.category?.toLowerCase() === favorite.category?.toLowerCase();

        // Retornar verdadero si hay al menos dos coincidencias en descripción o características y coincide la categoría
        return (descriptionMatches || characteristicsMatches) && categoryMatches;
    };

    // Función para seleccionar N artículos aleatorios
    const getRandomArticles = (articles, count) => {
        const shuffled = articles.sort(() => 0.5 - Math.random()); // Mezclar el array
        return shuffled.slice(0, count); // Seleccionar los primeros N artículos
    };

    // Función para recomendar artículos basados en las propiedades
    const recommendArticles = () => {
        const filteredArticles = allArticles.filter((article) => {
            const isFavorite = favoriteArticles.some(favorite => favorite.id === article.id);
            return (
                !isFavorite &&
                favoriteArticles.some(favorite => compareAttributes(article, favorite))
            );
        });

        const randomArticles = getRandomArticles(filteredArticles, 10); // Usar la función definida previamente
        setRecommendedArticles(randomArticles);
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






