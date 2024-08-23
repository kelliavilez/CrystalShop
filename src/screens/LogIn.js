import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/globalStyles';
import { TextInput, Button } from 'react-native-paper';


const LogIn = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://previews.123rf.com/images/neonicflower/neonicflower1511/neonicflower151100006/47737821-%C3%A1rbol-icono-de-%C3%A1rbol-%C3%A1rbol-de-eco-%C3%A1rbol-de-la-ecolog%C3%ADa-icono-%C3%A1rbol-aislado-en-el-fondo-%C3%A1rbol.jpg' }}
            style={styles.imagenLog}
            alt='Logo GreenMarket'
          />
          <Text style={styles.titleLog}> Bienvenid@ </Text>
          <Text style={styles.titleLog}>GreenMarket</Text>
          <Text style={styles.subtitleLog}>Compra ecológica que siempre resalta y abarca </Text>
          <TextInput
            label="Usuario"
            placeholder='Ingrese aqui su usuario'
            onChangeText={text => setText()}
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
            placeholder='Ingrese aqui su contraseña'
            onChangeText={text => setText()}
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
            onPress={() => console.log('Pressed')
            }>
            Ingresar
          </Button>
          <Text>No tienes cuenta? Registrate</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
