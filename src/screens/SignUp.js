import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Alert, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import styles from '../styles/globalStyles';
import { Picker } from '@react-native-picker/picker';
import firebase from '../firebase'; // Asegúrate de que esta importación es correcta

const SignUp = () => {
  const { dispatch } = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [names, setNames] = useState('');
  const [lastnames, setLastnames] = useState('');


  const [validationMessages, setValidationMessages] = useState({
    username: '',
    password: '',
    email: '',
    dateOfBirth: '',
    address: '',
    country: '',
    department: '',
    city: '',
    names: '',
    lastnames: ''
  });

  const navigation = useNavigation();

  dayjs.extend(customParseFormat);

  useEffect(() => {
    const namesRule = /^[a-zA-Z\s]+$/;

    if (names.length === 0) {
      setValidationMessages((prev) => ({ ...prev, names: 'Los nombres son requeridos.' }));
    } else if (namesRule.test(names)) {
      setValidationMessages((prev) => ({ ...prev, names: 'Nombres válidos ✅' }));
    } else {
      setValidationMessages((prev) => ({ ...prev, names: 'Solo se permiten letras.' }));
    }
  }, [names]);

  useEffect(() => {
    const lastnamesRule = /^[a-zA-Z\s]+$/;

    if (lastnames.length === 0) {
      setValidationMessages((prev) => ({ ...prev, lastnames: 'Los apellidos son requeridos.' }));
    } else if (lastnamesRule.test(lastnames)) {
      setValidationMessages((prev) => ({ ...prev, lastnames: 'Apellidos válidos ✅' }));
    } else {
      setValidationMessages((prev) => ({ ...prev, lastnames: 'Solo se permiten letras.' }));
    }
  }, [lastnames]);

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

  useEffect(() => {
    if (selectedCountry) {
      setValidationMessages((prev) => ({ ...prev, country: 'País seleccionado ✅' }));
    } else {
      setValidationMessages((prev) => ({ ...prev, country: 'Selecciona un país.' }));
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedDepartment) {
      setValidationMessages((prev) => ({ ...prev, department: 'Departamento seleccionado ✅' }));
    } else {
      setValidationMessages((prev) => ({ ...prev, department: 'Selecciona un departamento.' }));
    }
  }, [selectedDepartment]);

  useEffect(() => {
    if (selectedCity) {
      setValidationMessages((prev) => ({ ...prev, city: 'Ciudad seleccionada ✅' }));
    } else {
      setValidationMessages((prev) => ({ ...prev, city: 'Selecciona una ciudad.' }));
    }
  }, [selectedCity]);
  
  const handleSignUp = async () => {
    // Verificar que todos los campos requeridos estén completos
    if (!username || !password || !email || !dateOfBirth || !address || !selectedCountry || !selectedDepartment || !selectedCity || !names || !lastnames) {
        Alert.alert('Error', 'Por favor, complete todos los campos.');
        return;
    }

    // Validación
    const hasErrors = Object.values(validationMessages).some(message =>
        message.includes('inválido') ||
        message.includes('requiere') ||
        message.includes('Máximo') ||
        message.includes('mínimo') ||
        message.includes('Máximo 30 caracteres.') ||
        message.includes('La dirección es requerida.') ||
        message.includes('Debes tener al menos 18 años.') ||
        message.includes('No puedes tener más de 50 años.') ||
        message.includes('Selecciona un país.') ||
        message.includes('Selecciona un departamento.') ||
        message.includes('Selecciona una ciudad.') ||
        message.includes('Los nombres son requeridos.') ||
        message.includes('Solo se permiten letras.') ||
        message.includes('Los apellidos son requeridos.')
    );

    if (hasErrors) {
        Alert.alert('Error', 'Por favor, corrija los errores en el formulario.');
        return;
    }

    try {
        // Autenticar con Firebase Authentication
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password); // Asegúrate de usar firebase.auth()
        const user = userCredential.user;

        // Guardar los datos adicionales en Firestore
        await firebase.db.collection('users').doc(user.uid).set({
            username: username,
            email: user.email,
            dateOfBirth: dateOfBirth,
            address: address,
            names: names,
            lastnames: lastnames,
            country: selectedCountry,
            department: selectedDepartment,
            city: selectedCity,
        });

        Alert.alert('Éxito', '¡Registro completado exitosamente!');
        navigation.navigate('Main');

        // Dispatch para almacenar datos del usuario en el contexto (sin la contraseña)
        dispatch({
            type: 'SET_USER',
            payload: {
                username,
                email,
                dateOfBirth,
                address,
                names,
                lastnames,
            },
        });
    } catch (error) {
        Alert.alert('Error', 'Hubo un problema al registrar el usuario. Intente de nuevo.');
        console.error("Error al registrar usuario: ", error);
    }
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
          label="Nombres"
          value={names}
          onChangeText={setNames}
          underlineColor='#89c07a'
          activeUnderlineColor='#89c07a'
          style={styles.textInput}
        />
        <Text style={styles.validationMessage}>{validationMessages.names}</Text>

        <TextInput
          label="Apellidos"
          value={lastnames}
          onChangeText={setLastnames}
          underlineColor='#89c07a'
          activeUnderlineColor='#89c07a'
          style={styles.textInput}
        />
        <Text style={styles.validationMessage}>{validationMessages.lastnames}</Text>

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

        <Picker
          style={styles.textInput}
          selectedValue={selectedCountry}
          onValueChange={(itemValue) => setSelectedCountry(itemValue)}
        >
          <Picker.Item label="Selecciona un país" value="" />
          <Picker.Item label="Colombia" value="colombia" />
        </Picker>
        <Text style={styles.validationMessage}>{validationMessages.country}</Text>

        <Picker
          style={styles.textInput}
          selectedValue={selectedDepartment}
          onValueChange={(itemValue) => setSelectedDepartment(itemValue)}
        >
          <Picker.Item label="Seleccionar departamento" value="" />
          <Picker.Item label="Antioquia" value="antioquia" />
          <Picker.Item label="Bogotá" value="bogota" />
          <Picker.Item label="Cundinamarca" value="cundinamarca" />
        </Picker>
        <Text style={styles.validationMessage}>{validationMessages.department}</Text>

        <Picker
          style={styles.textInput}
          selectedValue={selectedCity}
          onValueChange={(itemValue) => setSelectedCity(itemValue)}
          enabled={selectedDepartment !== ''}
        >
          <Picker.Item label="Selecciona una ciudad" value="" />
          {selectedDepartment === 'antioquia' && (
            <Picker.Item label="Medellín" value="medellin" />
          )}
          {selectedDepartment === 'antioquia' && (
            <Picker.Item label="Bello" value="bello" />
          )}
          {selectedDepartment === 'antioquia' && (
            <Picker.Item label="Envigado" value="envigado" />
          )}
          {selectedDepartment === 'antioquia' && (
            <Picker.Item label="Itagui" value="itagui" />
          )}
          {selectedDepartment === 'antioquia' && (
            <Picker.Item label="Sabaneta" value="sabaneta" />
          )}

          {selectedDepartment === 'cundinamarca' && (
            <Picker.Item label="Soacha" value="soacha" />
          )}
          {selectedDepartment === 'cundinamarca' && (
            <Picker.Item label="Funza" value="funza" />
          )}
          {selectedDepartment === 'cundinamarca' && (
            <Picker.Item label="Girardot" value="giradot" />
          )}
          {selectedDepartment === 'cundinamarca' && (
            <Picker.Item label="Mosquera" value="mosquera" />
          )}
          {selectedDepartment === 'cundinamarca' && (
            <Picker.Item label="Pacho" value="pacho" />
          )}

          {selectedDepartment === 'bogota' && (
            <Picker.Item label="Cota" value="cota" />
          )}
          {selectedDepartment === 'bogota' && (
            <Picker.Item label="Mosquera" value="mosquera" />
          )}
          {selectedDepartment === 'bogota' && (
            <Picker.Item label="Tenjo" value="tenjo" />
          )}
          {selectedDepartment === 'bogota' && (
            <Picker.Item label="Silvania" value="silvania" />
          )}
          {selectedDepartment === 'bogota' && (
            <Picker.Item label="Sibaté" value="sibate" />
          )}
        </Picker>
        <Text style={styles.validationMessage}>{validationMessages.city}</Text>


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

