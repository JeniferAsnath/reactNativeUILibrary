// src/components/lists/List.js
import React from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const List = ({ data, renderItem, onItemPress }) => {
  if (!Array.isArray(data)) {
    console.error('La prop `data` doit être un tableau.');
    return null;
  }

  if (typeof onItemPress !== 'function') {
    console.error('La prop `onItemPress` doit être une fonction.');
    return null;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onItemPress(item)}>
          <View style={styles.itemContainer}>
            {renderItem({ item })}
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listContainer: {
    padding: 16,
  },
});

export default List;
