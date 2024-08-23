import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native';
import LogIn from './src/screens/LogIn';
import {Button, Card, Title, TextInput, Icon, PaperProvider} from 'react-native-paper';
import styles from './src/styles/globalStyles';
import ArticlesDetails from './src/components/ArticlesDetails';
import HelpSupport from './src/screens/HelpSupport';
import Oferts from './src/screens/Oferts';
import OfertsCard from './src/components/OfertsCard';
import MyBoughts from './src/screens/MyBoughts';
import ArticlesCategory from './src/screens/ArticlesCategory';
import ArticlesCard from './src/components/ArticlesCard';
import SignUp from './src/screens/SignUp';
import Payment from './src/screens/Payment';

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
        <Stack.Screen name='HelpSupport' component={HelpSupport}/>
        <Stack.Screen name='MyBoughts' component={MyBoughts}/>
        <Stack.Screen name='ArticlesCategory' component={ArticlesCategory}/>
        <Stack.Screen name='ArticlesDetails' component={ArticlesDetails}/>
        <Stack.Screen name='Registro' component={SignUp} />
        <Stack.Screen name='Pagos' component={Payment} />
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
          <Drawer.Screen name='GreenMarket' component={HomeScreen}
          options={{
            headerTitle: () => (
              <View>
                <TextInput placeholder='Buscar en GreenMarket'
                style={styles.textInputHeaderHome}/>
              </View>
            )
          }} 
          />
          <Drawer.Screen name='LogIn' component={LogIn}/>
          <Drawer.Screen name='HelpSupport' component={HelpSupport}
          options={{
            headerTitle: () => (
              <View>
                <TextInput placeholder='Buscar en GreenMarket'
                style={styles.textInputHeaderHome}/>
              </View>
            )
          }}/>
          <Drawer.Screen name='Oferts' component={Oferts}
          options={{
            headerTitle: () => (
              <View>
                <TextInput placeholder='Buscar en GreenMarket'
                style={styles.textInputHeaderHome}/>
              </View>
            )
          }}/>
          <Drawer.Screen name='MyBoughts' component={MyBoughts}
          options={{
            headerTitle: () => (
              <View>
                <TextInput placeholder='Buscar en GreenMarket'
                style={styles.textInputHeaderHome}/>
              </View>
            )
          }}/>
          <Drawer.Screen name='ArticlesCategory' component={ArticlesCategory}
          options={{
            headerTitle: () => (
              <View>
                <TextInput placeholder='Buscar en GreenMarket'
                style={styles.textInputHeaderHome}/>
              </View>
            )
          }}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


const ArtciclesDetails = () => {
  return (
    <View>
      <ScrollView>
        <View style={{flex:1, backgroundColor: 'green'}}>
          <View style={{backgroundColor: 'green', padding:20}}> 
            <Title>Detalles Articulos</Title>
            <Button mode='contained' onPress={()=>console.log('cargando')}>Agregar al carrito de compras</Button>
          </View>
          <Card style={{margin:20}}>
            <Card.Title title="Informacion articulo"/>
            <Card.Content>
              <TextInput
              label='Buscar articulo'
              placeholder='Busque aquí'
              style={{marginBottom: 10}}
              mode='outlined'
              maxLength={10}
              />
              <View style={{flexDirection:'row', justifyContent:'flex-start', marginBottom: 20}}>
                <Button mode='outlined' onPress={()=>console.log('Agregando')}>Agregar al carrito</Button>
              </View>
            </Card.Content>
            <Card.Actions>
              <Button mode='contained' onPress={()=>console.log('Agregado al carrito')}>Agregar al carrito</Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
    </View>
  )
}


export default App;




