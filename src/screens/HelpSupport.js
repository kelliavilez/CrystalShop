import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/HelpSupportStyles';
import { TextInput, Button, Menu, Dialog, Portal } from 'react-native-paper';

const HelpSupport = () => {

  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [maxLengthReached, setMaxLengthReached] = useState(false);

  const maxLength = 300;

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleSend = () => {
    console.log('Texto enviado:', text);
    hideDialog();
  };

  useEffect(() => {
    if (text.length >= maxLength) {
      setMaxLengthReached(true);
    } else {
      setMaxLengthReached(false);
    }
  }, [text]);

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
                maxLength={maxLength}
                value={text}
                onChangeText={setText}
                style={styles.textInput}
                underlineColor='#FF7F00'
                activeUnderlineColor='#FF7F00'
                activeOutlineColor='#FF7F00'
              />
              {maxLengthReached && (
                <Text style={styles.errorText}>Límite máximo de caracteres alcanzado ({maxLength})</Text>
              )}
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
