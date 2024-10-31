import React, { useState, useEffect, useContext } from 'react';
import { View, Image, Text, SafeAreaView, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/globalStyles';
import firebase from '../firebase'; // Asegúrate de que esta importación es correcta
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
    setError(''); // Restablecer el error antes de iniciar sesión

    if (!isEmailValid || !isPasswordValid) {
        Alert.alert('Error', 'Por favor, ingrese un correo electrónico y contraseña válidos.');
        return;
    }

    try {
        // Autenticar con Firebase Authentication
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Verificar si el usuario existe en la colección Firestore
        const userDoc = await firebase.db.collection('users').doc(user.uid).get();
        
        if (!userDoc.exists) {
            Alert.alert('Error', 'Usuario no registrado en la base de datos.');
            return;
        }

        // Almacenar los datos del usuario en el contexto
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
        navigation.navigate('Main'); // Asegúrate de que 'Main' sea el nombre correcto de tu pantalla principal
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
            label="Correo Electrónico"
            placeholder='Ingrese aquí su correo electrónico'
            onChangeText={validateEmail}
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


/*import React, { useState, useEffect } from 'react';
import { View, Image, Text, SafeAreaView, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/globalStyles';
import firebase from '../firebase';
import bcrypt from 'bcryptjs';

const LogIn = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isUserValid, setIsUserValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigation = useNavigation();

  const userName = (text) => {
    if (text.length <= 10) {
      setUser(text);
      setIsUserValid(true);
    } else {
      setIsUserValid(false);
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
    if (!isUserValid) {
      setError('El nombre de usuario debe tener máximo 10 caracteres.');
    } else if (!isPasswordValid) {
      setError('La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, un número y un carácter especial.');
    } else {
      setError(''); 
    }
  }, [isUserValid, isPasswordValid]);

  // Función de inicio de sesión
  const handleLogin = async () => {
    if (!isUserValid || !isPasswordValid) {
      Alert.alert('Error', error); // Usa el mensaje de error ya definido
      return;
    }
    
    try {
      const userDoc = await firebase.db.collection('users').where('username', '==', user).get();
      
      if (userDoc.empty) {
        Alert.alert('Error', 'Usuario no encontrado.');
        return;
      }
  
      const userData = userDoc.docs[0].data();
      const passwordMatch = await bcrypt.compare(password, userData.password);
  
      if (passwordMatch) {
        Alert.alert('Éxito', '¡Inicio de sesión exitoso!');
        navigation.navigate('NombreDeLaPantallaPrincipal'); // Cambia 'NombreDeLaPantallaPrincipal' por el nombre de la pantalla a la que deseas navegar
      } else {
        Alert.alert('Error', 'Usuario o contraseña incorrectos.');
      }
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      Alert.alert('Error', 'Hubo un problema al iniciar sesión. Intente de nuevo.');
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
*/