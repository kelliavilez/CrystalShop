import React from 'react';
import { View, Text, Image, Button, FlatList  } from 'react-native';
import styles from '../styles/globalStyles';
import ArticlesDetails from '../components/ArticlesDetails'
import { useNavigation } from '@react-navigation/native';
import OfertsCard from "../components/OfertsCard";

const Oferts = () => {
    const numColumns = 2;
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.headingStyle} variant="titleLarge">Mis ofertas</Text>
        <FlatList
          data={oferts}
          renderItem={({ item }) => <OfertsCard ofert={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          key={numColumns}
        />
      </View>
    );
  };

  const oferts = [
    {
      id: 1,
      photo: 'https://www.shutterstock.com/image-photo/portrait-black-red-doberman-pinscher-600nw-2353421935.jpg',
      
    },
    {
      id: 2,
      photo: 'https://cdn.redcanina.es/wp-content/uploads/2019/02/12102930/golden-cachorro-e1549967733842-1024x650.jpg',
    
    },
    {
      id: 3,
      photo: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/gato_persa.jpg',
    
    },
    {
      id: 4,
      photo: 'https://dovet.es/wp-content/uploads/2019/06/cachorro-pastor-aleman.jpg',
      
    },
    {
      id: 5,
      photo: 'https://dovet.es/wp-content/uploads/2019/06/cachorro-pastor-aleman.jpg',
    },
    {
      id: 6,
      photo: 'https://dovet.es/wp-content/uploads/2019/06/cachorro-pastor-aleman.jpg',
    }
  ];

  export default Oferts;
  