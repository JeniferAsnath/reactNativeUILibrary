// Input.js
import React, { forwardRef } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = forwardRef(({ label, error, ...props }, ref) => (
  <View style={styles.container}>
    {label && <Text style={styles.label}>{label}</Text>}
    <TextInput
      ref={ref}
      style={[styles.input, error && styles.errorInput]}
      {...props}
    />
    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
));

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 4,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
});

export default Input;
