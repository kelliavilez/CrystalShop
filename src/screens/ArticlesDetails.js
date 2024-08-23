import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/ofertsStyles';
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

/*
/*
import React, { useState } from 'react';
import { View, Text, TextInput, Image, Picker, Button, ScrollView } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

const ProductDetailsScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [value, setValue] = useState('');
  const [question, setQuestion] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleRatingCompleted = (rating) => {
    setRating(rating);
  };

  const handleSubmitQuestion = () => {
    // Lógica para enviar la pregunta
    alert(`Pregunta enviada: ${question}`);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Detalles de Artículo</Text>
/*
      {/* Selección del Producto }//*
      <Text style={{ fontSize: 18 }}>Producto:</Text>
      <Picker
        selectedValue={selectedProduct}
        style={{ height: 50, marginBottom: 20 }}
        onValueChange={(itemValue) => setSelectedProduct(itemValue)}
      >
        <Picker.Item label="Producto 1" value="producto1" />
        <Picker.Item label="Producto 2" value="producto2" />
        <Picker.Item label="Producto 3" value="producto3" />
      </Picker>

      {/* Imagen }
      <Image
        source={{ uri: 'https://via.placeholder.com/300' }}
        style={{ width: '100%', height: 200, marginBottom: 20 }}
        resizeMode="contain"
      />

      {/* Descripción }
      <Text style={{ fontSize: 18 }}>Descripción:</Text>
      <Text style={{ marginBottom: 20 }}>Una breve descripción del producto.</Text>

      {/* Valor }
      <Text style={{ fontSize: 18 }}>Valor:</Text>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 20 }}
        keyboardType="numeric"
        maxLength={8}
        value={value}
        onChangeText={setValue}
      />

      {/* Características del Producto }
      <Text style={{ fontSize: 18 }}>Características del Producto:</Text>
      <Text style={{ marginBottom: 20 }}>Más información del producto aquí.</Text>

      {/* Medios de Pago }
      <Text style={{ fontSize: 18 }}>Medios de Pago:</Text>
      <Text style={{ marginBottom: 20 }}>Tarjeta de Crédito, PayPal, Transferencia Bancaria.</Text>

      {/* Preguntas }
      <Text style={{ fontSize: 18 }}>Preguntas al Vendedor:</Text>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Escribe tu pregunta (máximo 100 caracteres)"
        maxLength={100}
        value={question}
        onChangeText={setQuestion}
      />
      <Button title="Enviar Pregunta" onPress={handleSubmitQuestion} />

      {/* Comentarios }
      <Text style={{ fontSize: 18, marginTop: 20 }}>Comentarios:</Text>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 20 }}
        placeholder="Escribe tu comentario (máximo 200 caracteres)"
        maxLength={200}
        value={comment}
        onChangeText={setComment}
      />

      {/* Calificación }
      <Text style={{ fontSize: 18 }}>Calificación:</Text>
      <AirbnbRating
        count={5}
        defaultRating={rating}
        size={30}
        onFinishRating={handleRatingCompleted}
        showRating={false}
        style={{ marginBottom: 20 }}
      />
      {rating > 0 && (
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 20 }}
          placeholder="Escribe un comentario sobre tu calificación"
          value={comment}
          onChangeText={setComment}
        />
      )}
    </ScrollView>
  );
};

export default ProductDetailsScreen;



npm install react-native-ratings

*/

