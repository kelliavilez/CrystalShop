import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

const ArticlesDetails = ({ navigation }) => {

  return (
    <View>
      <View>
        <Text style={styles.title}>Appointment</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Date: </Text>
        <Text style={styles.subtitle}>Hour: </Text>
        <Text style={styles.subtitle}>Place: </Text>
        <Text style={styles.subtitle}>History: </Text>
        <Button title="save" onPress={() => {}} />
      </View>
    </View>
  );
};

export default ArticlesDetails;