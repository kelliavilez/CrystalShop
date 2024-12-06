import React, { useState, useEffect, useContext } from 'react';
import { View, Image, Text, SafeAreaView, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/globalStyles';
import firebase from '../firebase';
import { AppContext } from '../context/AppContext';

const LogIn = () => {

  const { dispatch } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigation = useNavigation();

  const validateEmail = (text) => {
    const emailRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(text);
    if (emailRule.test(text)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const validatePassword = (text) => {
    const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    setPassword(text);
    if (passwordRule.test(text)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  useEffect(() => {
    if (!isEmailValid) {
      setError('Por favor ingresa un correo electrónico válido.');
    } else if (!isPasswordValid) {
      setError('La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, un número y un carácter especial.');
    } else {
      setError('');
    }
  }, [isEmailValid, isPasswordValid]);

  const handleLogin = async () => {
    setError('');

    if (!isEmailValid || !isPasswordValid) {
      Alert.alert('Error', 'Por favor, ingrese un correo electrónico y contraseña válidos.');
      return;
    } try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      const userDoc = await firebase.db.collection('users').doc(user.uid).get();

      if (!userDoc.exists) {
        Alert.alert('Error', 'Usuario no registrado en la base de datos.');
        return;
      }

      const userData = userDoc.data();
      dispatch({
        type: 'SET_USER',
        payload: {
          username: userData.username,
          email: userData.email,
          dateOfBirth: userData.dateOfBirth,
          address: userData.address,
          names: userData.names,
          lastnames: userData.lastnames,
        },
      });

      Alert.alert('Éxito', '¡Inicio de sesión exitoso!');
      navigation.navigate('Main');
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      let errorMessage = 'Error desconocido. Intente nuevamente más tarde.';

      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No hay un usuario registrado con ese correo electrónico.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'La contraseña es incorrecta.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'El formato del correo electrónico es incorrecto.';
      }

      Alert.alert('Error', errorMessage);
    }
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.container2}>
            <Image
              source={require('../img/logoCrystalShop.jpg')}
              style={styles.imagenLog}
              alt="Logo CrystalShop"
            />
            <View style={styles.titleContainer}>
              <Text style={styles.titleLog}>All</Text>
              <Text style={styles.titleLog2}>Crystal</Text>
            </View>
            <Text style={styles.subtitleLog}>Todo en un mismo lugar</Text>
          </View>
          <View style={styles.container3}>
            <TextInput
              label="Correo Electrónico"
              placeholder='Ingrese aquí su correo electrónico'
              onChangeText={validateEmail}
              underlineColor='transparent'
              activeUnderlineColor='transparent'
              activeOutlineColor='#1E1F21'
              outlineColor='#1E1F21'
              selectionColor='#1E1F21'
              cursorColor='#1E1F21'
              style={styles.textInput}
            />
            <TextInput
              label="Contraseña"
              placeholder='Ingrese aquí su contraseña'
              secureTextEntry
              onChangeText={validatePassword}
              underlineColor='transparent'
              activeUnderlineColor='transparent'
              activeOutlineColor='#1E1F21'
              outlineColor='#1E1F21'
              selectionColor='#1E1F21'
              cursorColor='#1E1F21'
              style={styles.textInput}
            />
            <Button
              mode="contained"
              buttonColor='#FF7F00'
              style={styles.buttonLog}
              onPress={handleLogin}
            >
              Ingresar
            </Button>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <View>
            </View>
          </View>
          <Text style={styles.subtitleLog}>
            ¿No tienes cuenta? <Text style={styles.link} onPress={() => navigation.navigate('Registro')}>Regístrate</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;

