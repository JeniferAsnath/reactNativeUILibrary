// Drawer.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Drawer = ({ items, onItemPress }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => onItemPress(item)}>
          <Text style={styles.item}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default Drawer;
