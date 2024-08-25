import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button } from 'react-native-paper';
import styles from '../styles/globalStyles';

const LogIn = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

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
            onPress={() => console.log('Pressed')}
          >
            Ingresar
          </Button>
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
