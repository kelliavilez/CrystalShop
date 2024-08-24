import React from 'react';
import { View, Text, Image, Button, FlatList  } from 'react-native';
import styles from '../../styles/globalStyles';
import GardeningCard from '../../components/GardeningCard';

const Gardening = () => {
  const numColumns = 2;
    return (
      <View style={styles.viewStyle}>
        <FlatList
          data={gardenings}
          renderItem={({ item }) => <GardeningCard gardening={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          key={numColumns}
        />
      </View>
    );
  };

  const gardenings = [
    {
      id: 1,
      photo: 'https://cdnx.jumpseller.com/vive-rosa-vive-jardin1/image/38253413/resize/1200/1200?1691248496',
      description: 'Lindas macetas para decorar interiores',  
      price: 150000,
    },
    {
      id: 2,
      price: 40000,
      photo: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/e4fc9dc2-f136-4da4-8407-9a2f3a292573.f43ac6ef31641830e1480944cbaecc96.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      description: 'La regadera perfecta para tú jardin',
    },
    {
      id: 3,
      price: 60000,
      photo: 'https://mundodotaciones.com/wp-content/uploads/2022/03/kit-de-jardineria.png',
      description: 'Set materiales para jardineria',
    },
    {
      id: 4,
      price: 160000,
      photo: 'https://www.aquacentro.com/images/jardineria-piscinas-valencia-3.jpg',
      description: 'Set materiales para jardineria',
    },
    {
      id: 5,
      price: 300000,
      photo: 'https://cdn.relaxdays.com/media/catalog/category/Gew_chsh_user.jpg',
      description: 'Pequeña malla para tus plantas',
    },
    {
      id: 6,
      price: 1000000,
      photo: 'https://todocesped.es/wp-content/uploads/2023/04/costes-de-material-cesped-natural.jpg',
      description: 'Podadora jardin',
    },
    
  ];

  export default Gardening;