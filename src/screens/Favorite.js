/*import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from '../styles/globalStyles';
import FavoriteCard from "../components/FavoriteCard";
import SearchBar from '../components/SearchBar';
import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import firestore from '@react-native-firebase/firestore';

const Favorite = () => {
    const { state } = useContext(AppContext);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFavorites = state.favorites.favoritesItems.filter((item) =>
        item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={styles.viewStyle}>
            <SearchBar onSearch={setSearchQuery} />
            {filteredFavorites.length > 0 ? (
                <FlatList
                    data={filteredFavorites}
                    renderItem={({ item }) => <FavoriteCard article={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text style={styles.subtitleLog}>No tienes articulos añadidos en favoritos</Text>
            )}
        </View>
    );
};

export default Favorite;*/

import React, { useState, useContext, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from '../styles/globalStyles';
import FavoriteCard from "../components/FavoriteCard";
import SearchBar from '../components/SearchBar';
import { AppContext } from '../context/AppContext';
import firestore from '@react-native-firebase/firestore';

const Favorite = () => {
    const { state } = useContext(AppContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Cargar los datos desde Firestore
        const unsubscribe = firestore()
            .collection('favorites')  // Nombre de la colección
            .onSnapshot((querySnapshot) => {
                const favoritesList = [];
                querySnapshot.forEach((documentSnapshot) => {
                    favoritesList.push({
                        ...documentSnapshot.data(),
                        id: documentSnapshot.id,  // Agregar el ID del documento
                    });
                });
                setFavorites(favoritesList);  // Actualiza el estado con los datos
            });

        // Limpiar la suscripción cuando el componente se desmonte
        return () => unsubscribe();
    }, []);

    // Filtrar los favoritos según la búsqueda
    const filteredFavorites = favorites.filter((item) =>
        item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={styles.viewStyle}>
            <SearchBar onSearch={setSearchQuery} />
            {filteredFavorites.length > 0 ? (
                <FlatList
                    data={filteredFavorites}
                    renderItem={({ item }) => <FavoriteCard article={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text style={styles.subtitleLog}>No tienes artículos añadidos en favoritos</Text>
            )}
        </View>
    );
};

export default Favorite;

