// Card.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, content, footer }) => {
  return (
    <View style={styles.card}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Text style={styles.content}>{content}</Text>
      {footer && <Text style={styles.footer}>{footer}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
  footer: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
});

export default Card;
