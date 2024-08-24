import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from '../styles/globalStyles';
import LogIn from './LogIn';

const SignUp = (navigation) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState(""); 
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

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
    if (passwordRule.test(text)) {
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

  const handleSignUp = () => {
    console.log('Usuario:', user);
    console.log('Contraseña:', password);
    console.log('Correo electrónico:', email);
    console.log('Fecha de nacimiento:', date);
    console.log('Dirección:', address);
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
          onChangeText={setDate}
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
            ¿Ya tienes una cuenta? <Text style={styles.link} onPress={() => navigation.navigate(LogIn)}>Inicia sesión</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;