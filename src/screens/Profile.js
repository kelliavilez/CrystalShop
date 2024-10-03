import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Avatar, Text, Title, Subheading, Button } from 'react-native-paper';
import { AppContext } from '../context/AppContext'; // Importa el contexto
import styles from '../styles/profileStyles'; // Importar los estilos

const Profile = () => {
  const { state } = useContext(AppContext); // Accede al estado global

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Avatar.Image
              size={150}
              source={{ uri: state.user.photo || 'https://www3.gobiernodecanarias.org/medusa/ecoblog/jtolsan/files/2014/04/Creeper-the-minecraft-creeper-32728884-1750-2500.jpg' }}
              style={styles.avatar}
            />
            <Title style={styles.name}>{state.user.username}</Title>
          </Card.Content>
          <Card.Content style={styles.details}>
            <Text style={styles.label}>Nombre:</Text>
            <Title style={styles.value}>{state.user.username}</Title>

            <Text style={styles.label}>Fecha de nacimiento:</Text>
            <Title style={styles.value}>{state.user.dateOfBirth}</Title>
          </Card.Content>
          <Card.Actions style={styles.actions}>
            <Button mode="contained" onPress={() => { }} style={styles.button}>
              Editar Perfil
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
};
export default Profile;
