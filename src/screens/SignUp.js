import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import styles from '../styles/globalStyles';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Image
          source={{ uri: 'https://previews.123rf.com/images/neonicflower/neonicflower1511/neonicflower151100006/47737821-%C3%A1rbol-icono-de-%C3%A1rbol-%C3%A1rbol-de-eco-%C3%A1rbol-de-la-ecolog%C3%ADa-icono-%C3%A1rbol-aislado-en-el-fondo-%C3%A1rbol.jpg' }}
          style={styles.imagenLog}
          alt='Logo GreenMarket'
        />

        <Text style={styles.titleSign}>Create una cuenta</Text>
        <Text style={styles.subtitleLog}>Compra ecológica que siempre resalta y abarca </Text>
        <TextInput
          label="Usuario"
          placeholder='Ingrese un usuario'
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
          placeholder='********'
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
          label="Correo electronico"
          placeholder='example@gmail.com'
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
          label="Fecha de nacimineto"
          placeholder='DD/MM/YYYY'
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
          label="Direccion"
          onChangeText={text => setText()}
          underlineColor='#89c07a'
          activeUnderlineColor='#89c07a'
          activeOutlineColor='#a9bea3'
          outlineColor='#cee8c7'
          selectionColor='#cee8c7'
          cursorColor='#cee8c7'
          style={styles.textInput}
        />
        <View>
          <Button
            mode="contained"
            buttonColor='#89c07a'
            style={styles.buttonLog}
            onPress={() => console.log('Registrado')
            }>
            Registrate
          </Button>
        </View>
        <View >
        <Text >
          ¿Ya tienes una cuenta? <Text style={styles.link} onPress={() => console.log('Ir a login')}>Inicia sesión</Text>
        </Text>
          
        </View>
      </View>
    </View>
  );
};

export default SignUp;