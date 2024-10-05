import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { AppContext } from '../context/AppContext'; 

const CustomDrawerContent = (props) => {
  const { state } = useContext(AppContext); 

  const userPhoto = state.user.photo || 'https://www3.gobiernodecanarias.org/medusa/ecoblog/jtolsan/files/2014/04/Creeper-the-minecraft-creeper-32728884-1750-2500.jpg';
  const username = state.user.username || 'Nombre de Usuario';

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Avatar.Image
          size={100} 
          source={{ uri: userPhoto }}
        />
        <Title style={styles.userName}>{username}</Title>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#35570a',
  },
});

export default CustomDrawerContent;

