// App.tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import LogIn from './src/screens/LogIn'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LogIn />
    </SafeAreaView>
  );
};

export default App;

