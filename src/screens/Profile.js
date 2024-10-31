import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Avatar, Text, Title, Button } from 'react-native-paper';
import { AppContext } from '../context/AppContext';
import styles from '../styles/profileStyles';

const Profile = ({ navigation }) => {
  const { state } = useContext(AppContext);

  const [refresh, setRefresh] = useState(false);

  const handleSave = async () => {
setRefresh(prev => !prev); // Forzar actualización
};

useEffect(() => {
  console.log("Estado del usuario:", state.user); // Agrega este log
}, [state.user]);



return (
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Avatar.Image
            size={150}
            source={{
              uri: typeof state.user.photo === 'string' && state.user.photo.trim() !== ''
                ? state.user.photo
                : 'https://www3.gobiernodecanarias.org/medusa/ecoblog/jtolsan/files/2014/04/Creeper-the-minecraft-creeper-32728884-1750-2500.jpg'
            }}
            style={styles.avatar}
          />


          <Title style={styles.name}>{state.user.username}</Title>
        </Card.Content>
        <Card.Content style={styles.details}>
          <Text style={styles.label}>Nombres:</Text>
          <Title style={styles.value}>{state.user.names}</Title>
          <Text style={styles.label}>Apellidos:</Text>
          <Title style={styles.value}>{state.user.lastnames}</Title>
          <Text style={styles.label}>Fecha de nacimiento:</Text>
          <Title style={styles.value}>{state.user.dateOfBirth}</Title>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button mode="contained" onPress={() => navigation.navigate('EditProfile')} style={styles.button}>
            Editar Perfil
          </Button>
        </Card.Actions>
      </Card>
    </View>
  </ScrollView>
);
};

export default Profile;

