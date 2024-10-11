// Toast.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Toast = ({ message, visible, duration = 3000 }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <Animated.View style={[styles.toast, { opacity: fadeAnim }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  message: {
    color: '#fff',
  },
});

export default Toast;
