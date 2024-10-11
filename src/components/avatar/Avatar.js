// Avatar.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Avatar = ({ source, size = 50, text }) => (
  <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }]}>
    {source ? (
      <Image source={source} style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]} />
    ) : (
      <Text style={[styles.text, { fontSize: size / 2 }]}>{text}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  image: {
    resizeMode: 'cover',
  },
  text: {
    lineHeight: 50,
    textAlign: 'center',
    color: '#fff',
  },
});

export default Avatar;
