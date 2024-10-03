import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/HelpSupportStyles';
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleLog}> Ayuda y Soporte</Text>
          <Text style={styles.subtitleLog}>Selecciones el tipo de solicitud:</Text>
        </View>
        <View style={styles.optionMenuContainer}>
          <Button mode="outlined" onPress={showDialog} labelStyle={styles.optionButtonLabel} style={styles.optionButton}>
            Queja
          </Button>
          <Button mode="outlined" onPress={showDialog} labelStyle={styles.optionButtonLabel} style={styles.optionButton}>
            Peticion
          </Button>
          <Button mode="outlined" onPress={showDialog} labelStyle={styles.optionButtonLabel} style={styles.optionButton}>
            Recurso
          </Button>
        </View>
        <Portal>
          <Dialog style={styles.dialogContent} visible={visible} onDismiss={hideDialog}>
            <Dialog.Title style={styles.dialogTitle}>Ingrese su mensaje</Dialog.Title>
            <Dialog.Content style={styles.dialogContent}>
              <TextInput
                label="Mensaje"
                multiline
                numberOfLines={4}
                maxLength={300}
                value={text}
                onChangeText={setText}
                style={styles.textInput}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button labelStyle={styles.optionButtonLabel} onPress={hideDialog}>Cancelar</Button>
              <Button labelStyle={styles.optionButtonLabel} onPress={handleSend}>Enviar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </SafeAreaView>
  );
};


export default HelpSupport;
