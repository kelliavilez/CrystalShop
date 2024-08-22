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
            backgroundColor: 'Green'
          },
        }}>
        <Stack.Screen name='GreenMarket' component={HomeScreen}/>
        <Stack.Screen name='LogIn' component={LogIn}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App() {
  const Drawer=createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='GreenMarket' component={HomeScreen}/>
        <Drawer.Screen name='LogIn' component={LogIn}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
/*
<SafeAreaView style={{ flex: 1 }}>
      <LogIn />
      </SafeAreaView>
*/ 
export default App;




