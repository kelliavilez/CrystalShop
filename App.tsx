import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppProvider } from './src/context/AppContext';
import { PaperProvider } from 'react-native-paper';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import HelpSupport from './src/screens/HelpSupport';
import Oferts from './src/screens/Oferts';
import MyBoughts from './src/screens/MyBoughts';
import ArticlesCategory from './src/screens/Categories';
import ShoppingCart from './src/screens/ShoppingCart';
import Profile from './src/screens/Profile';
import Favorite from './src/screens/Favorite';
import ArticleDetailsCard from './src/components/ArticleDetailsCard';
import OfertsDetailsCard from './src/components/OfertsDetailsCard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FavoriteDetailsCard from './src/components/FavoriteDetailsCard';
import PaymentsCard from './src/components/PaymentsCard';
import CustomDrawerContent from './src/components/CustomDrawerContent';
import EditProfile from './src/components/EditProfile';
import Suggestions from './src/screens/Suggestions';
import Oversize from './src/screens/Categories/Oversize';
import Formal from './src/screens/Categories/Formal';
import Casual from './src/screens/Categories/Casual';
import Deportiva from './src/screens/Categories/Deportiva';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthenticationStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: '#ffffff',
      headerStyle: { backgroundColor: '#1E1F21' },
    }}>
    <Stack.Screen name='LogIn' component={LogIn} />
    <Stack.Screen name='Registro' component={SignUp} />
  </Stack.Navigator>
);

const AppDrawer = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      drawerStyle: {
        backgroundColor: "#1E1F21",
        width: 240,
      },
      drawerActiveTintColor: "#ffffff",
      drawerInactiveTintColor: "#ffffff",
      drawerActiveBackgroundColor: "#FFD580",
      headerStyle: {
        backgroundColor: "#1E1F21",
      },
      headerTintColor: "#FF7F00",
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#FF7F00'
      },
    }}>
    <Drawer.Screen name='Inicio' component={Home}
      options={{
        drawerIcon: ({ size }) => (
          <Icon
            name={'home'}
            size={size}
            color={"#FF7F00"}
          />
        ),
        drawerLabelStyle: {
          color: '#FF7F00',
        }
      }} />
    <Drawer.Screen name='Perfil de usuario' component={Profile}
      options={{
        drawerIcon: ({ size }) => (
          <Icon
            name={'person'}
            size={size}
            color={"#FF7F00"}
          />
        ),
        drawerLabelStyle: {
          color: '#FF7F00',
        }
      }} />
    <Drawer.Screen name='Mis favoritos' component={Favorite}
      options={{
        drawerIcon: ({ size }) => (
          <Icon
            name={'bookmark'}
            size={size}
            color={"#FF7F00"}
          />
        ),
        drawerLabelStyle: {
          color: '#FF7F00',
        }
      }} />
    <Drawer.Screen name='Mis compras' component={MyBoughts}
      options={{
        drawerIcon: ({ size }) => (
          <Icon
            name={'shopify'}
            size={size}
            color={"#FF7F00"}
          />
        ),
        drawerLabelStyle: {
          color: '#FF7F00',
        }
      }} />
    <Drawer.Screen name='Ofertas' component={Oferts}
      options={{
        drawerIcon: ({ size }) => (
          <Icon
            name={'local-mall'}
            size={size}
            color={"#FF7F00"}
          />
        ),
        drawerLabelStyle: {
          color: '#FF7F00',
        }
      }} />
    <Drawer.Screen name='Ayuda y soporte' component={HelpSupport}
      options={{
        drawerIcon: ({ size }) => (
          <Icon
            name={'help'}
            size={size}
            color={"#FF7F00"}
          />
        ),
        drawerLabelStyle: {
          color: '#FF7F00',
        }
      }} />
    <Drawer.Screen name='Categorias' component={ArticlesCategory}
      options={{
        drawerIcon: ({ size }) => (
          <Icon
            name={'category'}
            size={size}
            color={"#FF7F00"}
          />
        ),
        drawerLabelStyle: {
          color: '#FF7F00',
        }
      }} />
    <Drawer.Screen name='Mi carrito' component={ShoppingCart}
      options={{
        drawerIcon: ({ size }) => (
          <Icon
            name={'shopping-cart'}
            size={size}
            color={"#FF7F00"}
          />
        ),
        drawerLabelStyle: {
          color: '#FF7F00',
        }
      }} />
      <Drawer.Screen name='Mis sugerencias' component={Suggestions}
      options={{
        drawerIcon: ({ size }) => (
          <Icon
            name={'favorite'}
            size={size}
            color="#FF7F00"
          />
        ),
        drawerLabelStyle: {
          color: '#FF7F00',
        }
      }}  />
  </Drawer.Navigator>
  
);

const App = () => (
  <AppProvider>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1E1F21',
            },
            headerTintColor: "#FF7F00",
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#FF7F00'
            },
          }}>
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
          <Stack.Screen
            name="ArticleDetailsCard"
            component={ArticleDetailsCard}
            options={{ title: 'Detalles de articulo' }}
          />
          <Stack.Screen
            name="OfertsDetailsCard"
            component={OfertsDetailsCard}
            options={{ title: 'Detalles de oferta' }}
          />
          <Stack.Screen
            name="FavoriteDetailsCard"
            component={FavoriteDetailsCard}
            options={{ title: 'Detalles de favoritos' }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ title: 'Editar perfil' }}
          />
          <Stack.Screen
            name="PaymentsCard"
            component={PaymentsCard}
            options={{ title: 'Portal pagos' }}
          />
          <Stack.Screen
            name="Oversize"
            component={Oversize}
            options={{ title: 'Categoría: Oversize' }}
          />
          <Stack.Screen
            name="Formal"
            component={Formal}
            options={{ title: 'Categoría: Formal' }}
          />
          <Stack.Screen
            name="Casual"
            component={Casual}
            options={{ title: 'Categoría: Casual' }}
          />
          <Stack.Screen
            name="Deportiva"
            component={Deportiva}
            options={{ title: 'Categoría: Deportiva' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </AppProvider>
);

export default App;
