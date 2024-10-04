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
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(''); 
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

export default SignUp;*/


import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Alert, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext'; 
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from '../styles/globalStyles';

const SignUp = () => {
  const { dispatch } = useContext(AppContext); 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(''); 
  const [address, setAddress] = useState('');
  
  const [validationMessages, setValidationMessages] = useState({
    username: '',
    password: '',
    email: '',
    dateOfBirth: '',
    address: ''
  });

  const navigation = useNavigation();

  dayjs.extend(customParseFormat);

  useEffect(() => {
    if (username.length > 0 && username.length <= 10) {
      setValidationMessages((prev) => ({ ...prev, username: 'El nombre de usuario es válido ✅' }));
    } else if (username.length > 10) {
      setValidationMessages((prev) => ({ ...prev, username: 'Máximo 10 caracteres.' }));
    } else {
      setValidationMessages((prev) => ({ ...prev, username: 'El nombre de usuario es requerido.' }));
    }
  }, [username]);

  useEffect(() => {
    const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (password.length === 0) {
      setValidationMessages((prev) => ({ ...prev, password: 'La contraseña es requerida.' }));
    } else if (passwordRule.test(password)) {
      setValidationMessages((prev) => ({ ...prev, password: 'Contraseña válida ✅' }));
    } else {
      setValidationMessages((prev) => ({ 
        ...prev, 
        password: 'Mínimo 8 caracteres, una mayúscula, un número y un carácter especial.'
      }));
    }
  }, [password]);

  useEffect(() => {
    const emailRule = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.length === 0) {
      setValidationMessages((prev) => ({ ...prev, email: 'El correo electrónico es requerido.' }));
    } else if (emailRule.test(email)) {
      setValidationMessages((prev) => ({ ...prev, email: 'Correo electrónico válido ✅' }));
    } else {
      setValidationMessages((prev) => ({ ...prev, email: 'Correo electrónico inválido.' }));
    }
  }, [email]);

  useEffect(() => {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (dateOfBirth.length === 0) {
      setValidationMessages((prev) => ({ ...prev, dateOfBirth: 'La fecha de nacimiento es requerida.' }));
      return;
    }

    if (!dateRegex.test(dateOfBirth)) {
      setValidationMessages((prev) => ({ ...prev, dateOfBirth: 'Formato inválido. Usa DD/MM/YYYY.' }));
      return;
    }

    const birthDate = dayjs(dateOfBirth, 'DD/MM/YYYY');
    if (!birthDate.isValid()) {
      setValidationMessages((prev) => ({ ...prev, dateOfBirth: 'Fecha inválida.' }));
      return;
    }

    const today = dayjs();
    const age = today.diff(birthDate, 'year');

    if (age < 18) {
      setValidationMessages((prev) => ({ ...prev, dateOfBirth: 'Debes tener al menos 18 años.' }));
    } else if (age > 50) {
      setValidationMessages((prev) => ({ ...prev, dateOfBirth: 'No puedes tener más de 50 años.' }));
    } else {
      setValidationMessages((prev) => ({ ...prev, dateOfBirth: 'Fecha de nacimiento válida ✅' }));
    }
  }, [dateOfBirth]);

  useEffect(() => {
    if (address.length > 0 && address.length <= 30) {
      setValidationMessages((prev) => ({ ...prev, address: 'Dirección válida ✅' }));
    } else if (address.length > 30) {
      setValidationMessages((prev) => ({ ...prev, address: 'Máximo 30 caracteres.' }));
    } else {
      setValidationMessages((prev) => ({ ...prev, address: 'La dirección es requerida.' }));
    }
  }, [address]);

  const handleSignUp = () => {

    if (!username || !password || !email || !dateOfBirth || !address) {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
      return;
    }

    const hasErrors = Object.values(validationMessages).some(message => 
      message.includes('inválido') || 
      message.includes('requiere') || 
      message.includes('Máximo') || 
      message.includes('mínimo') || 
      message.includes('Máximo 30 caracteres.') || 
      message.includes('La dirección es requerida.') || 
      message.includes('Debes tener al menos 18 años.') || 
      message.includes('No puedes tener más de 50 años.')
    );

    if (hasErrors) {
      Alert.alert('Error', 'Por favor, corrija los errores en el formulario.');
      return;
    }

    dispatch({
      type: 'SET_USER',
      payload: {
        username,
        email,
        dateOfBirth,
        address,
      },
    });

    Alert.alert('Éxito', '¡Registro completado exitosamente!');
    navigation.navigate('Main');
  };

  return (
<ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff' }}>
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
          onChangeText={setUsername}
          underlineColor='#89c07a'
          activeUnderlineColor='#89c07a'
          activeOutlineColor='#a9bea3'
          outlineColor='#cee8c7'
          selectionColor='#cee8c7'
          cursorColor='#cee8c7'
          style={styles.textInput}
        />
        <Text style={styles.validationMessage}>{validationMessages.username}</Text>

        <TextInput
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          underlineColor='#89c07a'
          activeUnderlineColor='#89c07a'
          activeOutlineColor='#a9bea3'
          outlineColor='#cee8c7'
          selectionColor='#cee8c7'
          cursorColor='#cee8c7'
          secureTextEntry={true}
          style={styles.textInput}
        />
        <Text style={styles.validationMessage}>{validationMessages.password}</Text>

        <TextInput
          label="Correo electrónico"
          onChangeText={setEmail}
          value={email}
          underlineColor='#89c07a'
          activeUnderlineColor='#89c07a'
          activeOutlineColor='#a9bea3'
          outlineColor='#cee8c7'
          selectionColor='#cee8c7'
          cursorColor='#cee8c7'
          keyboardType="email-address"
          style={styles.textInput}
        />
        <Text style={styles.validationMessage}>{validationMessages.email}</Text>

        <TextInput
          label="Fecha de nacimiento"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          placeholder='DD/MM/YYYY'
          underlineColor='#89c07a'
          activeUnderlineColor='#89c07a'
          activeOutlineColor='#a9bea3'
          outlineColor='#cee8c7'
          selectionColor='#cee8c7'
          cursorColor='#cee8c7'
          style={styles.textInput}
        />
        <Text style={styles.validationMessage}>{validationMessages.dateOfBirth}</Text>

        <TextInput
          label="Dirección"
          value={address}
          onChangeText={setAddress}
          underlineColor='#89c07a'
          activeUnderlineColor='#89c07a'
          activeOutlineColor='#a9bea3'
          outlineColor='#cee8c7'
          selectionColor='#cee8c7'
          cursorColor='#cee8c7'
          style={styles.textInput}
        />
        <Text style={styles.validationMessage}>{validationMessages.address}</Text>

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
    </ScrollView>
  );
};

export default SignUp;

