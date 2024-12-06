import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import { AppContext } from '../context/AppContext';
import firestore from '@react-native-firebase/firestore';
import ArticlesCard from "../components/ArticlesCard";
import styles from '../styles/globalStyles';

const Suggestions = () => {
    const { state } = useContext(AppContext); // Estado global para el usuario
    const [allArticles, setAllArticles] = useState([]);
    const [favoriteArticles, setFavoriteArticles] = useState([]);
    const [recommendedArticles, setRecommendedArticles] = useState([]);
    const [numColumns, setNumColumns] = useState(2); // Número de columnas para el FlatList

    const currentUser = state?.user; // Usuario actual del contexto global

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

    // Obtener los favoritos del usuario actual desde Firestore
    useEffect(() => {
        const fetchFavorites = async () => {
            if (!currentUser?.username) {
                console.warn("Usuario no autenticado.");
                return;
            }

            try {
                const snapshot = await firestore()
                    .collection('favorites')
                    .where('username', '==', currentUser.username) // Filtrar por el usuario actual
                    .get();

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
    }, [currentUser?.username]);

    // Sincronizar favoritos y hacer recomendaciones
    useEffect(() => {
        if (favoriteArticles.length > 0 && allArticles.length > 0) {
            recommendArticles();
        }
    }, [favoriteArticles, allArticles]);

    // Comparar atributos de artículos
    const compareAttributes = (article, favorite) => {
        const getMatches = (str1, str2) => {
            const words1 = str1?.toLowerCase().split(' ') || [];
            const words2 = str2?.toLowerCase().split(' ') || [];
            return words1.filter(word => words2.includes(word)).length;
        };

        const descriptionMatches = getMatches(article.description, favorite.description) >= 2;
        const characteristicsMatches = getMatches(article.characteristics, favorite.characteristics) >= 2;
        const categoryMatches = article.category?.toLowerCase() === favorite.category?.toLowerCase();

        return (descriptionMatches || characteristicsMatches) && categoryMatches;
    };

    // Seleccionar N artículos aleatorios
    const getRandomArticles = (articles, count) => {
        const shuffled = [...articles].sort(() => Math.random() - 0.5); // Crear una copia y mezclar
        return shuffled.slice(0, count);
    };

    // Función para recomendar artículos
    const recommendArticles = () => {
        const filteredArticles = allArticles.filter((article) => {
            const isFavorite = favoriteArticles.some(favorite => favorite.id === article.id);
            return (
                !isFavorite &&
                favoriteArticles.some(favorite => compareAttributes(article, favorite))
            );
        });

        setRecommendedArticles(getRandomArticles(filteredArticles, 10));
    };

    return (
        <View style={styles.viewStyle}>
            {recommendedArticles.length > 0 ? (
                <FlatList
                    data={recommendedArticles}
                    renderItem={({ item }) => <ArticlesCard article={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={numColumns}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    key={numColumns} // Asegurar renderizado al cambiar columnas
                />
            ) : (
                <Text style={styles.subtitleLog}>No hay sugerencias disponibles.</Text>
            )}
        </View>
    );
};

export default Suggestions;







