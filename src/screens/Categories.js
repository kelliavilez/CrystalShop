import React from 'react';
import { View, FlatList } from 'react-native';
import CategoriesCard from '../components/CategoriesCard';
import styles from '../styles/globalStyles';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoriesCard
            category={item}
            onPress={() => navigation.navigate(categories.route)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const categories = [
  {
    id: 1,
    photo: 'https://static.vecteezy.com/system/resources/previews/006/116/842/non_2x/dog-paw-marks-accessories-for-pets-shop-concept-animal-logo-vector.jpg',
    name: 'Oversize',
    route: 'Oversize',
  },
  {
    id: 2,
    photo: 'https://img.freepik.com/vector-premium/plantilla-empresa-logotipo-tienda-plantas-botanicas-jardineria_8580-724.jpg',
    name: 'Formal',
    route: 'Formal',
  },
  {
    id: 3,
    photo: 'https://img.freepik.com/vector-gratis/set-maquillaje-accesorios-dibujo_24640-46682.jpg',
    name: 'Casual',
    route: 'Casual',
  },
  {
    id: 4,
    photo: 'https://img.kwcdn.com/product/open/2023-12-19/1702991492392-7e99973aaac54c61b4ff1e1c32f2f77d-goods.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp',
    name: 'Deportiva',
    route: 'Deportiva',
  },
];

export default Categories;

