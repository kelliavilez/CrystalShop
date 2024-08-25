import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/BoughtStyles';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Text, IconButton } from 'react-native-paper';


const BoughtsCard = ({ bought }) => {

  const navigation = useNavigation();

  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.container}>
            <Image source={{ uri: bought.photo }} style={styles.photo} />
            <View style={styles.textContainer}>
              <Text variant="bodySmall">{bought.category}</Text>
              <Text variant="bodySmall">{bought.description}</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.buttonState} buttonColor='#96b89c' mode="contained" onPress={() => navigation.navigate('')}>
              {bought.state}
            </Button>
          </View>

        </Card.Content>
      </Card>
    </View>
  );
};

export default BoughtsCard;