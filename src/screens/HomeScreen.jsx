import { StyleSheet, View, FlatList } from "react-native";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import ArticlesCard from "../components/ArticlesCard";
import ArticlesDetails from '../components/ArticlesDetails';
import { Card, Button, Text, IconButton } from 'react-native-paper';

function HomeScreen(navigation) {
    const numColumns = 2;
    const handleNavigateToDetails = (article) => {
      navigation.navigate('ArticlesDetails', { article });
    };
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headingStyle} variant="titleLarge">Productos</Text>
            <Text style={styles.textStyele}></Text>
            <FlatList
            data={articles}
            renderItem={({ item }) => 
            <ArticlesCard 
            article={item} 
            onPress={() => handleNavigateToDetails(item)} 
           />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            key={numColumns}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#e1f1dd',

    },
    textStyele: {
        fontSize: 28,
        color: 'black',
    },
    headingStyle: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: -25,
        
    }
});

const articles = [
    {
      id: 1,
      photo: 'https://cdn.redcanina.es/wp-content/uploads/2019/02/12102930/golden-cachorro-e1549967733842-1024x650.jpg',
      destription: 'hola',
     
    },
    {
      id: 2,
      photo: 'https://cdn.redcanina.es/wp-content/uploads/2019/02/12102930/golden-cachorro-e1549967733842-1024x650.jpg',
      destription: 'hola',
    },
    {
      id: 3,
      photo: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/gato_persa.jpg',
      Destription: '',
    },
    {
      id: 4,
      photo: 'https://dovet.es/wp-content/uploads/2019/06/cachorro-pastor-aleman.jpg',
      Destription: '',
    },
    {
      id: 5,
      photo: 'https://dovet.es/wp-content/uploads/2019/06/cachorro-pastor-aleman.jpg',
      Destription: '',
    },
    {
      id: 6,
      photo: 'https://dovet.es/wp-content/uploads/2019/06/cachorro-pastor-aleman.jpg',
    }
  ];

export default HomeScreen;