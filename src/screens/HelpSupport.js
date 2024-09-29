import React, {useState} from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/globalStyles';
import { TextInput, Button, Menu, Dialog, Portal } from 'react-native-paper';


const HelpSupport = () => {

  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleSend = () => {
    console.log('Texto enviado:', text);
    hideDialog(); 
  };


  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleLog}> Ayuda y Soporte</Text>
          <Text style={styles.subtitleLog}>Selecciones el tipo de solicitud:</Text>
          <View style={styles.optionMenu}>
            <Button mode="outlined" onPress={showDialog} style={styles.optionMenu}>
              Queja
            </Button>
            <Button mode="outlined" onPress={showDialog} style={styles.optionMenu}>
              Peticion
            </Button>
            <Button mode="outlined" onPress={showDialog} style={styles.optionMenu}>
              Recurso
            </Button>
          </View>
        </View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Ingrese su mensaje</Dialog.Title>
            <Dialog.Content>
              <TextInput
                label="Mensaje"
                multiline
                numberOfLines={4}
                maxLength={300}
                value={text}
                onChangeText={setText}
                style={styles.MessageHelpSupport}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancelar</Button>
              <Button onPress={handleSend}>Enviar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </SafeAreaView>
  );
};

export default HelpSupport;
