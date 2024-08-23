import React from 'react';
import { View } from 'react-native';
import { Card, Avatar, Text, Title, Subheading, Button } from 'react-native-paper';
import styles from '../styles/profileStyles';

const Profile = () => {



    return (

        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                    <Avatar.Image
                        size={150}
                        source={{ uri: 'https://www3.gobiernodecanarias.org/medusa/ecoblog/jtolsan/files/2014/04/Creeper-the-minecraft-creeper-32728884-1750-2500.jpg' }}
                        style={styles.avatar}
                    />
                    <Title style={styles.name}>Kelly Johana</Title>
                    <Subheading style={styles.email}>Kell222@gmail.com</Subheading>
                </Card.Content>
                <Card.Content style={styles.details}>
                    <Text style={styles.label}>Nombre:</Text>
                    <View style={styles.container2}>
                        <Title style={styles.value}>Kelly </Title>
                    </View>

                    <Text style={styles.label}>Apellidos:</Text>
                    <View style={styles.container2}>
                        <Title style={styles.value}>Salgado</Title>
                    </View>
                    <Text style={styles.label}>Fecha de nacimiento:</Text>
                    <View style={styles.container2}>
                        <Title style={styles.value}>02/11/2004 </Title>
                    </View>

                </Card.Content>
                <Card.Actions style={styles.actions}>
                    <Button mode="contained" onPress={() => { }} style={styles.button}>
                        Editar Perfil
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    );
};

export default Profile;
