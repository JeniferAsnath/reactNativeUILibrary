// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title, leftIcon: LeftIcon, rightIcon: RightIcon, onLeftPress, onRightPress }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <TouchableOpacity onPress={onLeftPress}>
        {LeftIcon && <LeftIcon />}
      </TouchableOpacity>
      <Text>{title}</Text>
      <TouchableOpacity onPress={onRightPress}>
        {RightIcon && <RightIcon />}
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
