import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import HelpSupport from './src/screens/HelpSupport';
import Oferts from './src/screens/Oferts';
import MyBoughts from './src/screens/MyBoughts';
import ArticlesCategory from './src/screens/Categories';
import Payment from './src/screens/Payment';
import Bedroom from './src/screens/Categories/Bedroom';
import Food from './src/screens/Categories/Food';
import Gardening from './src/screens/Categories/Gargening';
import Makeup from './src/screens/Categories/Makeup';
import Pets from './src/screens/Categories/Pets';
import ArticleDetailsCard from './src/components/ArticleDetailsCard';
import ShoppingCart from './src/screens/ShoppingCart';
import Profile from './src/screens/Profile';
import Favorite from './src/screens/Favorite';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AuthenticationStack = () => ( //where the user can login or signup
  <Stack.Navigator
    screenOptions={{
      headerTintColor: 'black',
      headerStyle: { backgroundColor: 'Green' },
    }}>
    <Stack.Screen name='LogIn' component={LogIn} />
    <Stack.Screen name='Registro' component={SignUp} />
  </Stack.Navigator>
);

const AppDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name='Home' component={Home} />
    <Drawer.Screen name='Pagos' component={Payment} />
    <Drawer.Screen name='Ayuda y soporte' component={HelpSupport} />
    <Drawer.Screen name='Ofertas' component={Oferts} />
    <Drawer.Screen name='Mis compras' component={MyBoughts} />
    <Drawer.Screen name='Categorias' component={ArticlesCategory} />
    <Drawer.Screen name='Bedroom' component={Bedroom} />
    <Drawer.Screen name='Gardening' component={Gardening} />
    <Drawer.Screen name='Food' component={Food} />
    <Drawer.Screen name='Makeup' component={Makeup} />
    <Drawer.Screen name='Pets' component={Pets} />
    <Drawer.Screen name='ArticleDetailsCard' component={ArticleDetailsCard} />
    <Drawer.Screen name='Carrito de compras' component={ShoppingCart} />
    <Drawer.Screen name='Perfil de usuario' component={Profile} />
    <Drawer.Screen name='Mis favoritos' component={Favorite} />
  </Drawer.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Auth'
        component={AuthenticationStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Main'
        component={AppDrawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
