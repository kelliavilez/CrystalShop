import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
    </NavigationContainer>
  );
}

export default App;


/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';

function App(){
  
  const Stack = createStackNavigator();_

  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
  );

}*/

/*const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>GreenMarket</Text>
    </View>
  );
};

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name ="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

*/


