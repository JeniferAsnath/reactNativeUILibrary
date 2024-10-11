// Badge.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Badge = ({ label, color = 'blue', textColor = 'white' }) => (
  <View style={[styles.container, { backgroundColor: color }]}>
    <Text style={[styles.text, { color: textColor }]}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Badge;
