// src/screens/LogIn.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../styles/globalStyles'
const LogIn = () => {
  return (
    <View style={styles.container}>
      <Text>Log In Screen</Text>
      <TextInput
      label='Email'
      placeholder='Escribe tu email aqui'
      onChangeText={text => setText()}
      mode= 'outlined'
      selectionColor='#008000'
      outlineColor='#008080'

    />
    </View>
  );
};


  

export default LogIn;
