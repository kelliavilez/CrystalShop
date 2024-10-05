import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from '../styles/globalStyles';
import FavoriteCard from "../components/FavoriteCard";
import SearchBar from '../components/SearchBar';
import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

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


const articles = [
    {
        id: 42,
        photo: 'https://catmajestic.com/wp-content/uploads/2023/04/Rascador-para-gatos-fingerprint-1000x1000.jpg',
        name: 'Rascador Gatos',
        description: 'Ideal para mantener las uñas de tu gato afiladas y evitar que rasguñe tus muebles.',
        statusCategory: 'Disponible - Mascotas',
        price: 200000,
        category: 'Mascotas'
    },
    {
        id: 43,
        photo: 'https://cdnx.jumpseller.com/vive-rosa-vive-jardin1/image/29406919/resize/800/800?1668354944',
        name: 'Macetas de cerámica',
        description: 'Perfectas para plantar flores o hierbas en interiores o exteriores.',
        statusCategory: 'Disponible - Jardineria',
        price: 20000,
        category: 'Jardineria'
    },
    {
        id: 44,
        photo: 'https://m.maccosmetics.com.co/media/export/cms/products/640x600/mac_sku_M66Y03_640x600_0.jpg',
        name: 'Delineador waterproof',
        description: 'Perfecto para una aplicación precisa y duradera durante todo el día.',
        statusCategory: 'Disponible - Maquillaje',
        price: 20500,
        category: 'Maquillaje'
    },
    {
        id: 45,
        photo: 'https://http2.mlstatic.com/D_NQ_NP_713947-MCO45035432163_022021-O.webp',
        name: 'Almohada ortopédica',
        description: 'Diseñada para proporcionar soporte adecuado para el cuello y la cabeza.',
        statusCategory: 'Disponible - Dormitorio',
        price: 90000,
        category: 'Dormitorio'
    },
];

export default Favorite;