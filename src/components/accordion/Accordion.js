// Accordion.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const Accordion = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = new Animated.Value(0);

  const toggleAccordion = () => {
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], // adjust this value based on the content size
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.body, { height }]}>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: '#fff',
  },
});

export default Accordion;
