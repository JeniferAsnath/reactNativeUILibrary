// Grid.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const Grid = ({ data, renderItem, numColumns = 2 }) => {
  return (
    <View style={[styles.grid, { flexDirection: numColumns > 1 ? 'row' : 'column' }]}>
      {data.map((item, index) => (
        <View key={index} style={[styles.item, { flexBasis: `${100 / numColumns}%` }]}>
          {renderItem({ item })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    margin: 5,
  },
});

export default Grid;
