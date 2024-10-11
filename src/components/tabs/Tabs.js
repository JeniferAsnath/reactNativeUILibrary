// Tabs.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Tabs = ({ tabs, initialTabIndex = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);

  return (
    <View style={styles.container}>
      <View style={styles.tabHeader}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveTabIndex(index)}
            style={[styles.tabButton, activeTabIndex === index && styles.activeTabButton]}>
            <Text style={styles.tabText}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.tabContent}>
        {tabs[activeTabIndex].content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
  },
  tabContent: {
    flex: 1,
    padding: 15,
  },
});

export default Tabs;
