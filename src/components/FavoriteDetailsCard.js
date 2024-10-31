import React, { useState, useContext } from 'react';
import { View, Image, ScrollView, Text, StyleSheet, Alert } from 'react-native';
import { Card, TextInput, RadioButton, Button } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppContext } from '../context/AppContext';

const FavoriteDetailsCard = ({ route }) => {

  const { article } = route.params;
  const [checked, setChecked] = useState('first');
  const [question, setQuestion] = useState('');
  const [comment, setComment] = useState('');
  const maxQuestionLength = 100;
  const maxCommentLength = 200;
  const { dispatch } = useContext(AppContext);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: article.id,
        productName: article.description,
        price: article.price,
        image: article.image,
        quantity: 1,
        description: article.characteritics
      },
    });
  };

  const handleRemoveFromFavorites = () => {
    dispatch({
      type: 'REMOVE_FROM_FAVORITES',
      payload: {
        id: article.id,
      },
    });
  };

  const handleQuestionSubmit = () => {
    Alert.alert("Pregunta enviada");
    setQuestion(''); // Limpiar el campo
  };

  const handleCommentSubmit = () => {
    Alert.alert("Comentario enviado");
    setComment(''); // Limpiar el campo
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Card style={styles.card} >
        <Card.Content>
          <Text style={styles.headline}>Detalles de Artículo</Text>
          <Text style={styles.title}>Item:</Text>
          <Image source={{ uri: article.image }} style={styles.mediumImage} />
          <Text style={styles.body}>Descripción: {article.productName}</Text>
          <Text style={styles.body}>Valor: ${article.price ? article.price.toLocaleString() : 'N/A'}</Text>
          <Text style={styles.body}>Características: {article.description}</Text>
          <Text></Text>
          <Button icon={({ size }) => <Icon name="shopping-cart" size={size} />} buttonColor='#89c07a' mode="contained" onPress={handleAddToCart}>Agregar al carrito</Button>
          <Text></Text>
          <Button icon={({ size }) => <Icon name="bookmark" size={size} />} buttonColor='#89c07a' mode="contained" onPress={handleRemoveFromFavorites}>Eliminar de favoritos</Button>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.title}>Forma de Pago</Text>
              {['Tarjeta de Crédito', 'PSE', 'Efecty'].map((method, index) => (
                <View style={styles.radioItem} key={index}>
                  <RadioButton
                    value={method}
                    status={checked === method ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(method)}
                  />
                  <Text>{method}</Text>
                </View>
              ))}
            </Card.Content>
          </Card>

          <Text style={styles.title}>Preguntas</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Haz una pregunta al vendedor"
            maxLength={maxQuestionLength}
            value={question}
            onChangeText={setQuestion}
          />
          {question.length === maxQuestionLength && (
            <Text style={styles.warningText}>Has alcanzado el límite de caracteres.</Text>
          )}
          <Button buttonColor='#89c07a' mode="contained" title="Enviar pregunta" onPress={handleQuestionSubmit}>Enviar pregunta</Button>

          <Text style={styles.title}>Comentarios</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Escribe un comentario"
            maxLength={maxCommentLength}
            value={comment}
            onChangeText={setComment}
          />
          {comment.length === maxCommentLength && (
            <Text style={styles.warningText}>Has alcanzado el límite de caracteres.</Text>
          )}
          <Button buttonColor='#89c07a' mode="contained" title="Enviar pregunta" onPress={handleCommentSubmit}>Enviar comentario</Button>

          <Text style={styles.title}>Calificación</Text>
          <Rating
            rating={0}
            onFinishRating={(rating) => console.log(rating)}
            showRating
            fractions={1}
          />
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 320,
    marginBottom: 16,
    backgroundColor: '#e1f1dd'
  },
  contentContainer: {
    padding: 16,
    alignItems: 'center',
  },
  card: {
    marginVertical: 8,
    width: '100%',
    backgroundColor: '#78a98c',
  },
  mediumImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 16,
    borderRadius: 10
  },
  cardContent: {
    marginVertical: 16,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginVertical: 8,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
});

export default FavoriteDetailsCard;