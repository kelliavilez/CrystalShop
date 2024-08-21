import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native';
import LogIn from './src/screens/LogIn';

const StackNavigation = () =>
{
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions=
        {{
          headerTintColor: 'black',
          headerStyle: 
          {
            backgroundColor: 'blue'
          },
        }}>
        <Stack.Screen name='Home' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App() {
  const Drawer=createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeScreen}/>
      </Drawer.Navigator>
      <SafeAreaView style={{ flex: 1 }}>
      <LogIn />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;




