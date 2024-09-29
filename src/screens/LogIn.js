import React, { useState, useEffect } from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/globalStyles';

const LogIn = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isUserValid, setIsUserValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigation = useNavigation();

  const testUser = "testuser";
  const testPassword = "Test@1234";

  // Validación del nombre de usuario
  const userName = (text) => {
    if (text.length <= 10) {
      setUser(text);
      setIsUserValid(true);
    } else {
      setIsUserValid(false);
    }
  };

  // Validación de la contraseña
  const validatePassword = (text) => {
    const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    setPassword(text);
    if (passwordRule.test(text)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  // useEffect para mostrar un mensaje cuando el usuario o contraseña no sean válidos
  useEffect(() => {
    if (!isUserValid) {
      setError('El nombre de usuario debe tener máximo 10 caracteres.');
    } else if (!isPasswordValid) {
      setError('La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, un número y un carácter especial.');
    } else {
      setError(''); // Limpiar el error si todo está bien
    }
  }, [isUserValid, isPasswordValid]); // Se activa cuando la validez de usuario o contraseña cambia

  const handleLogin = () => {
    if (user === testUser && password === testPassword) {
      navigation.navigate('Main'); 
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://previews.123rf.com/images/neonicflower/neonicflower1511/neonicflower151100006/47737821-%C3%A1rbol-icono-de-%C3%A1rbol-%C3%A1rbol-de-eco-%C3%A1rbol-de-la-ecolog%C3%ADa-icono-%C3%A1rbol-aislado-en-el-fondo-%C3%A1rbol.jpg' }}
            style={styles.imagenLog}
            alt='Logo GreenMarket'
          />
          <Text style={styles.titleLog}>Bienvenid@</Text>
          <Text style={styles.titleLog}>GreenMarket</Text>
          <Text style={styles.subtitleLog}>Compra ecológica que siempre resalta y abarca</Text>
          <TextInput
            label="Usuario"
            placeholder='Ingrese aquí su usuario'
            onChangeText={userName}
            underlineColor='#89c07a'
            activeUnderlineColor='#89c07a'
            activeOutlineColor='#a9bea3'
            outlineColor='#cee8c7'
            selectionColor='#cee8c7'
            cursorColor='#cee8c7'
            style={styles.textInput}
          />
          <TextInput
            label="Contraseña"
            placeholder='Ingrese aquí su contraseña'
            secureTextEntry
            onChangeText={validatePassword}
            underlineColor='#89c07a'
            activeUnderlineColor='#89c07a'
            activeOutlineColor='#a9bea3'
            outlineColor='#cee8c7'
            selectionColor='#cee8c7'
            cursorColor='#cee8c7'
            style={styles.textInput}
          />
          <Button
            mode="contained"
            buttonColor='#89c07a'
            style={styles.buttonLog}
            onPress={handleLogin}
          >
            Ingresar
          </Button>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <View>
            <Text>
              ¿No tienes cuenta? <Text style={styles.link} onPress={() => navigation.navigate('Registro')}>Regístrate</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
