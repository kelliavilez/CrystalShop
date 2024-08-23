import React from 'react';
import { View, Text, Image, Button, FlatList  } from 'react-native';
import styles from '../styles/globalStyles';
import ArticlesDetails from './ArticlesDetails'
import { useNavigation } from '@react-navigation/native';
import OfertsCard from "../components/OfertsCard";

const Oferts = () => {
    return (
      <View style={styles.viewStyle}>
        <FlatList
          data={oferts}
          renderItem={({ item }) => <OfertsCard ofert={item} />}
          keyExtractor={(item) => item.id.toString()}
   
        />
      </View>
    );
  };

  const oferts = [
    {
      id: 1,
      originalPrice: 200000,
      discount: 20,
      photo: 'https://catmajestic.com/wp-content/uploads/2023/04/Rascador-para-gatos-fingerprint-1000x1000.jpg',
      name: 'Rascador Gatos',
      description: 'Ideal para mantener las uñas de tu gato afiladas y evitar que rasguñe tus muebles.',
    },
    {
      id: 2,
      originalPrice: 40000,
      discount: 5,
      photo: 'https://cdnx.jumpseller.com/vive-rosa-vive-jardin1/image/29406919/resize/800/800?1668354944',
      name: 'Macetas de cerámica',
      description: 'Perfectas para plantar flores o hierbas en interiores o exteriores.',
    },
    {
      id: 3,
      originalPrice: 60000,
      discount: 30,
      photo: 'https://m.maccosmetics.com.co/media/export/cms/products/640x600/mac_sku_M66Y03_640x600_0.jpg',
      name: 'Delineador waterproof',
      description: 'Perfecto para una aplicación precisa y duradera durante todo el día.',
    },
    {
      id: 4,
      originalPrice: 160000,
      discount: 35,
      photo: 'https://http2.mlstatic.com/D_NQ_NP_713947-MCO45035432163_022021-O.webp',
      name: 'Almohada ortopédica',
      description: 'Diseñada para proporcionar soporte adecuado para el cuello y la cabeza.',
    },
    {
      id: 5,
      originalPrice: 90000,
      discount: 60,
      photo: 'https://www.proveedores.com/articulos/wp-content/uploads/2016/02/chocolate-gourmet-2.jpg',
      name: 'Chocolates gourmet',
      description: 'Ideal para mantener las uñas de tu gato afiladas y evitar que rasguñe tus muebles.',
    }
  ];

  export default Oferts;
  