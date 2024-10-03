import React, { useState, useContext } from 'react';
import { View, Text, Alert, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { AppContext } from '../context/AppContext'; // Context global
import dayjs from 'dayjs';
import styles from '../styles/globalStyles';

const SignUp = () => {
  const { dispatch } = useContext(AppContext); // Accedemos al dispatch del contexto
  const [username, setUsername] = useState(''); // Cambié user a username por claridad
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(''); // Cambié date a dateOfBirth
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const userName = (text) => {
    if (text.length <= 10) {
      setUsername(text);
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

  const validateDate = (text) => {
    setDateOfBirth(text);
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
      setError('No estás en el rango de edad para crear la cuenta');
      Alert.alert('Error de edad', 'Debes tener al menos 18 años para crear una cuenta');
    } else if (birthDate.isBefore(maxAgeDate)) {
      setError('No estás en el rango de edad para crear la cuenta');
      Alert.alert('Error de edad', 'No puedes crear una cuenta si tienes más de 50 años');
    } else {
      setError('');
    }
  };

  const handleSignUp = () => {
    if (error) {
      Alert.alert('Error', error);
      return;
    }

    if (!username || !password || !email || !dateOfBirth || !address) {
      Alert.alert('Error', 'Por favor, complete todos los campos');
      return;
    }

    // Despachar la acción para almacenar la información del usuario en el contexto
    dispatch({
      type: 'SET_USER',
      payload: {
        username,
        email,
        dateOfBirth,
        address,
      },
    });

    Alert.alert('Éxito', '¡Cuenta creada exitosamente!');
    navigation.navigate('Main'); 
  };

  return (
    <ScrollView>
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
            value={username}
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
            value={dateOfBirth}
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
    </ScrollView>
  );
};

export default SignUp;




/*import React, { useState, useContext } from 'react';
import { View, Text, Alert, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { AppContext } from '../context/AppContext';
import dayjs from 'dayjs';
import styles from '../styles/globalStyles';

const SignUp = () => {
  const { dispatch } = useContext(AppContext);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

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
      setError('No estás en el rango de edad para crear la cuenta');
      Alert.alert('Error de edad', 'Debes tener al menos 18 años para crear una cuenta');
    } else if (birthDate.isBefore(maxAgeDate)) {
      setError('No estás en el rango de edad para crear la cuenta');
      Alert.alert('Error de edad', 'No puedes crear una cuenta si tienes más de 50 años');
    } else {
      setError('');
    }
  };

  const handleSignUp = () => {
    if (error) {
      Alert.alert('Error', error);
      return;
    }
  
    // Aquí puedes añadir la lógica para crear el usuario, como llamar a una API
    // Ejemplo: API.createUser({ user, password, email, date, address })
    
    // Almacenar la información del usuario en el contexto
    dispatch({ type: 'SET_USER', payload: { user, email, date, address } });
  
    Alert.alert('Éxito', '¡Cuenta creada exitosamente!');
    navigation.navigate('Main'); // Cambia 'UserProfile' por el nombre de la pantalla de perfil
  };
  

  return (
    <ScrollView>
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
    </ScrollView>
  );
};

export default SignUp;*/
