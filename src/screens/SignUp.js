import React, { useState, useEffect } from 'react';
import { View, Image, Text, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import styles from '../styles/globalStyles';

const SignUp = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  // useEffect to validate the form dynamically
  useEffect(() => {
    if (user && password && email && date && address && !error) {
      setError(""); // No errors, all fields are valid
    } else if (!user || !password || !email || !date || !address) {
      setError("Todos los campos son obligatorios.");
    }
  }, [user, password, email, date, address, error]);

  const userName = (text) => {
    if (text.length <= 10) {
      setUser(text);
      setError('');
    } else {
      setError('El nombre de usuario debe tener máximo 10 caracteres.');
    }
  };

  const validatePassword = (text) => {
    const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    setPassword(text);
    if (passwordRule.test (text)) {
      setError('');
    } else {
      setError('La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, un número y un carácter especial.');
    }
  };

  const correctEmail = (text) => {
    const emailRule = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmail(text);
    if (emailRule.test(text)) {
      setError('');
    } else {
      setError('Correo electrónico inválido.');
    }
  };

  const correctAddress = (text) => {
    if (text.length <= 30) {
      setAddress(text);
      setError('');
    } else {
      setError('La dirección debe tener máximo 30 caracteres.');
    }
  };

  const validateDate = (text) => {
    setDate(text);
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dateRegex.test(text)) {
      setError('Fecha de nacimiento inválida');
      return;
    }
    const birthDate = dayjs(text, 'DD/MM/YYYY');
    const today = dayjs();
    const minAgeDate = today.subtract(18, 'year');
    const maxAgeDate = today.subtract(50, 'year');

    if (birthDate.isAfter(minAgeDate)) {
      setError('Debes tener al menos 18 años para crear una cuenta');
      Alert.alert('Error de edad', 'Debes tener al menos 18 años para crear una cuenta');
    } else if (birthDate.isBefore(maxAgeDate)) {
      setError('No puedes crear una cuenta si tienes más de 50 años');
      Alert.alert('Error de edad', 'No puedes crear una cuenta si tienes más de 50 años');
    } else {
      setError('');
    }
  };

  const handleSignUp = () => {
    if (!error) {
      navigation.navigate('Main');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://previews.123rf.com/images/neonicflower/neonicflower1511/neonicflower151100006/47737821-%C3%A1rbol-icono-de-%C3%A1rbol-%C3%A1rbol-de-eco-%C3%A1rbol-de-la-ecolog%C3%ADa-icono-%C3%A1rbol-aislado-en-el-fondo-%C3%A1rbol.jpg' }}
          style={styles.imagenLog}
          accessibilityLabel='Logo GreenMarket'
        />

        <Text style={styles.titleSign}>Crea una cuenta</Text>
        <Text style={styles.subtitleLog}>Compra ecológica que siempre resalta y abarca</Text>

        <TextInput
          label="Usuario"
          value={user}
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
          value={password}
          placeholder="Password"
          onChangeText={validatePassword}
          underlineColor='#89c07a'
          activeUnderlineColor='#89c07a'
          activeOutlineColor='#a9bea3'
          outlineColor='#cee8c7'
          selectionColor='#cee8c7'
          cursorColor='#cee8c7'
          secureTextEntry={true}
          style={styles.textInput}
        />

        <TextInput
          label="Correo electrónico"
          onChangeText={correctEmail}
          value={email}
          placeholder='example@gmail.com'
          underlineColor='#89c07a'
          activeUnderlineColor='#89c07a'
          activeOutlineColor='#a9bea3'
          outlineColor='#cee8c7'
          selectionColor='#cee8c7'
          cursorColor='#cee8c7'
          keyboardType="email-address"
          style={styles.textInput}
        />

        <TextInput
          label="Fecha de nacimiento"
          value={date}
          onChangeText={validateDate}
          placeholder='DD/MM/YYYY'
          underlineColor='#89c07a'
          activeUnderlineColor='#89c07a'
          activeOutlineColor='#a9bea3'
          outlineColor='#cee8c7'
          selectionColor='#cee8c7'
          cursorColor='#cee8c7'
          style={styles.textInput}
        />

        <TextInput
          label="Dirección"
          value={address}
          onChangeText={correctAddress}
          underlineColor='#89c07a'
          activeUnderlineColor='#89c07a'
          activeOutlineColor='#a9bea3'
          outlineColor='#cee8c7'
          selectionColor='#cee8c7'
          cursorColor='#cee8c7'
          style={styles.textInput}
        />

        {error && <Text style={styles.error}>{error}</Text>}

        <View>
          <Button
            mode="contained"
            buttonColor='#89c07a'
            style={styles.buttonLog}
            onPress={handleSignUp}
          >
            Regístrate
          </Button>
        </View>

        <View>
          <Text>
            ¿Ya tienes una cuenta? <Text style={styles.link} onPress={() => navigation.navigate('LogIn')}>Inicia sesión</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
