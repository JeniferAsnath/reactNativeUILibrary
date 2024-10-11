// Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({ leftContent, centerContent, rightContent }) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>{leftContent}</View>
      <View style={styles.section}>{centerContent}</View>
      <View style={styles.section}>{rightContent}</View>
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
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Footer;
