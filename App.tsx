import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {TextInput, PaperProvider} from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import HelpSupport from './src/screens/HelpSupport';
import Oferts from './src/screens/Oferts';
import MyBoughts from './src/screens/MyBoughts';
import ArticlesCategory from './src/screens/Categories';
import SignUp from './src/screens/SignUp';
import Payment from './src/screens/Payment';
import LogIn from './src/screens/LogIn';
import Bedroom from './src/screens/Categories/Bedroom';
import Food from './src/screens/Categories/Food';
import Gardening from './src/screens/Categories/Gargening';
import Makeup from './src/screens/Categories/Makeup';
import Pets from './src/screens/Categories/Pets';
import Categories from './src/screens/Categories';
import ArticleDetailsCard from './src/components/ArticleDetailsCard';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
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
        <Stack.Screen name='Ayuda y soporte' component={HelpSupport}/>
        <Stack.Screen name='Mis compras' component={MyBoughts}/>
        <Stack.Screen name='ArticlesCategory' component={ArticlesCategory}/>
        <Stack.Screen name='Registro' component={SignUp} />
        <Stack.Screen name='Pagos' component={Payment} />
        <Stack.Screen name='Categories' component={Categories} />
        <Stack.Screen name='Bedroom' component={Bedroom}/>
        <Stack.Screen name='Gardening' component={Gardening}/>
        <Stack.Screen name='Food' component={Food}/>
        <Stack.Screen name='Makeup' component={Makeup}/>
        <Stack.Screen name='Pets' component={Pets}/>
        <Stack.Screen name='ArticleDetailsCard' component={ArticleDetailsCard}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


function App() {
  const Drawer=createDrawerNavigator();
  const [active, setActive] = React.useState('');
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='GreenMarket' component={HomeScreen}/>
          <Drawer.Screen name='Registro' component={SignUp}/>
          <Drawer.Screen name='LogIn' component={LogIn}/>
          <Drawer.Screen name='Pagos' component={Payment}/>
          <Drawer.Screen name='Ayuda y soporte' component={HelpSupport}/>
          <Drawer.Screen name='Ofertas' component={Oferts}/>
          <Drawer.Screen name='Mis compras' component={MyBoughts}/>
          <Drawer.Screen name='Categorias' component={ArticlesCategory}/>
          <Drawer.Screen name='Bedroom' component={Bedroom}/>
          <Drawer.Screen name='Gardening' component={Gardening}/>
          <Drawer.Screen name='Food' component={Food}/>
          <Drawer.Screen name='Makeup' component={Makeup}/>
          <Drawer.Screen name='Pets' component={Pets}/>
          <Drawer.Screen name='ArticleDetailsCard' component={ArticleDetailsCard}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}



export default App;




