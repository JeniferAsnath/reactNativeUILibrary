import { StyleSheet } from 'react-native';

export const buttonStyles = {
  primary: StyleSheet.create({
    container: {
      backgroundColor: '#007BFF',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 24,
      alignItems: 'center',
    },
    text: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      backgroundColor: '#6C757D',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 24,
      alignItems: 'center',
    },
    text: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  }),
  tertiary: StyleSheet.create({
    container: {
      backgroundColor: '#FF4500',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 24,
      alignItems: 'center',
    },
    text: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  }),
};
