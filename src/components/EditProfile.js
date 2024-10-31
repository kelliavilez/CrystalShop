import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Alert, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';
import { Card } from 'react-native-paper';
import firebase from '../firebase';

const defaultProfileImages = [
  require('../img/profile/profile1.jpg'),
  require('../img/profile/profile2.jpg'),
  require('../img/profile/profile3.jpg'),
  require('../img/profile/profile4.jpg'),
];

const EditProfile = () => {
  const { state, dispatch } = useContext(AppContext);
  const [username, setUsername] = useState(state.user.username);
  const [photo, setPhoto] = useState(state.user.photo);

  const handleSave = async () => {
    try {
        const user = firebase.auth().currentUser;

        if (!username || !photo) {
            Alert.alert('Error', 'Por favor, asegúrate de que todos los campos estén completos.');
            return;
        }

        const userDocRef = firebase.db.collection('users').doc(user.uid);
        await userDocRef.update({
            username,
            photo,
        });

        dispatch({
            type: 'UPDATE_PROFILE',
            payload: {
                username,
                photo,
            },
        });
        console.log("Perfil actualizado:", { username, photo }); // Agrega este log

        Alert.alert('Perfil actualizado con éxito');
    } catch (error) {
        console.error('Error al actualizar el perfil:', error);
        Alert.alert('Error al actualizar el perfil', error.message);
    }
};


  const selectDefaultImage = (image) => {
    setPhoto(image);
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.avatarContainer}>
            <Image 
              source={photo || { uri: 'https://www3.gobiernodecanarias.org/medusa/ecoblog/jtolsan/files/2014/04/Creeper-the-minecraft-creeper-32728884-1750-2500.jpg' }} 
              style={styles.avatar} 
            />
          </View>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.textInput}
          />
          
          {/* Sección para imágenes de perfil predeterminadas */}
          <View style={styles.defaultImagesContainer}>
            {defaultProfileImages.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => selectDefaultImage(image)}>
                <Image source={image} style={styles.defaultImage} />
              </TouchableOpacity>
            ))}
          </View>
          
          <Button 
            title="Guardar Cambios" 
            onPress={handleSave} 
            mode="contained" 
            color="#89c07a" 
            style={styles.button} 
          />
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#78a98c',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textInput: {
    width: '100%',
    padding: 8,
    marginVertical: 8,
    backgroundColor: '#e1f1dd',
    borderRadius: 10,
  },
  defaultImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  defaultImage: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 25, // Redondear la imagen
  },
});

export default EditProfile;
