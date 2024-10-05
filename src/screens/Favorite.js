import React, { useContext, useState } from 'react';
import { View, FlatList } from 'react-native';
import FavoriteCard from "../components/FavoriteCard";
import SearchBar from '../components/SearchBar';
import { AppContext } from '../context/AppContext'; // Importamos el contexto global

const Favorite = () => {
    const { state } = useContext(AppContext); // Accedemos al contexto global para obtener los favoritos
    const [searchQuery, setSearchQuery] = useState('');

    // Filtramos los artículos favoritos según el valor ingresado en la barra de búsqueda
    const filteredArticles = state.favorites.favoritesItems.filter((article) =>
        article.name && article.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={{ flex: 1 }}>
            <SearchBar onSearch={setSearchQuery} />
            <FlatList
                data={filteredArticles}
                renderItem={({ item }) => <FavoriteCard article={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Favorite;
