import { StyleSheet, Text, View, FlatList } from "react-native";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import ArticlesCard from "../components/ArticlesCard";

function HomeScreen() {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headingStyle}>GreenMarket</Text>
            <Text style={styles.textStyle}></Text>
            <Text>Mascotas</Text>
            <FlatList
                data={articles}
                renderItem={({ item }) => <ArticlesCard article={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const articles = [
    {
      id: 1,
      photo: 'https://www.shutterstock.com/image-photo/portrait-black-red-doberman-pinscher-600nw-2353421935.jpg',
      name: 'Firulais',
      race: 'Doberman',
      type: 'Canine',
      age: 2,
      person: 'Camila',
      vet: 'Luis Carlos'
    },
    {
      id: 2,
      photo: 'https://cdn.redcanina.es/wp-content/uploads/2019/02/12102930/golden-cachorro-e1549967733842-1024x650.jpg',
      name: 'Pacho',
      race: 'Golden',
      type: 'Canine',
      age: 2,
      person: 'Andres',
      vet: 'Luis Carlos'
    },
    {
      id: 3,
      photo: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/gato_persa.jpg',
      name: 'Zafiro',
      race: 'Persa',
      type: 'Fenina',
      age: 3,
      person: 'Kelly Johana',
      vet: 'Martha'
    },
    {
      id: 4,
      photo: 'https://dovet.es/wp-content/uploads/2019/06/cachorro-pastor-aleman.jpg',
      name: 'Polo',
      race: 'Pastor aleman',
      type: 'Perro',
      age: 3,
      person: 'Juliana',
      vet: 'Martha'
    }
  ];
  

const styles = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyele: {
        fontSize: 28,
        color: 'black',
    },
    headingStyle: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
    }
});

export default HomeScreen;