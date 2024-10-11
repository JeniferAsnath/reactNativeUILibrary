// Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ label, onPress, style, textStyle, type = 'primary' }) => {
  const buttonStyles = [styles.button, styles[type], style];
  const textStyles = [styles.text, textStyle];

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  primary: {
    backgroundColor: 'blue',
  },
  secondary: {
    backgroundColor: 'gray',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: 'blue',
    borderWidth: 1,
  },
});

export default Button;
