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
    photo: 'https://rivercaves.com/wp-content/uploads/2022/06/Buzo-Oversize-Negro-Gris-River-Caves.jpg',
    name: 'Oversize',
    route: 'Oversize',
  },
  {
    id: 2,
    photo: 'https://louisphilippe.abfrl.in/blog/wp-content/uploads/2024/02/Formal-Dress-Code-in-2024.jpg',
    name: 'Formal',
    route: 'Formal',
  },
  {
    id: 3,
    photo: 'https://plushlamourmagazine.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-19-at-12.12.41.jpeg',
    name: 'Casual',
    route: 'Casual',
  },
  {
    id: 4,
    photo: 'https://duemosli.blogs.uv.es/files/2016/01/Ropa-deportiva-claves-y-consejos.jpg',
    name: 'Deportiva',
    route: 'Deportiva',
  },
];

export default Categories;

