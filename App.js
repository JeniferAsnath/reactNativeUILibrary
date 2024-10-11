// App.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Tabs from './src/components/tabs/Tabs';
import Input from './src/components/inputs/TextInput';
import Button from './src/components/buttons/Button';
import Accordion from './src/components/accordion/Accordion';
import Avatar from './src/components/avatar/Avatar';
import Badge from './src/components/badge/Badge';
import Card from './src/components/card/Card';
import Toast from './src/components/toast/Toast';
import Drawer from './src/components/drawer/Drawer';
import Footer from './src/components/footer/Footer';
import Header from './src/components/header/Header';

const App = () => {
  const [showToast, setShowToast] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const tabs = [
    {
      label: 'Input & Button',
      content: (
        <>
          <Text style={styles.header}>Input Component</Text>
          <Input placeholder="Type here..." />

          <Text style={styles.header}>Button Component</Text>
          <Button title="Click Me" onPress={() => setShowToast(true)} />
        </>
      ),
    },
    {
      label: 'Accordion & Avatar',
      content: (
        <>
          <Text style={styles.header}>Accordion Component</Text>
          <Accordion title="Accordion Title">
            <Text>Accordion Content</Text>
          </Accordion>

          <Text style={styles.header}>Avatar Component</Text>
          <View style={styles.avatarContainer}>
            <Avatar size={60} text="AB" />
            <Avatar size={60} source={{ uri: 'https://via.placeholder.com/150' }} />
          </View>
        </>
      ),
    },
    {
      label: 'Badge & Card',
      content: (
        <>
          <Text style={styles.header}>Badge Component</Text>
          <Badge count={5} />

          <Text style={styles.header}>Card Component</Text>
          <Card
            title="Card Title"
            content="This is the content of the card."
            footer="Card Footer"
          />
        </>
      ),
    },
    {
      label: 'Toast',
      content: (
        <>
          {showToast && <Toast message="This is a toast message!" visible={showToast} />}
        </>
      ),
    },
  ];

  const drawerItems = [
    { label: 'Home' },
    { label: 'Profile' },
    { label: 'Settings' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="App Header"
        leftIcon={() => <Text>Menu</Text>}
        rightIcon={() => <Text>Profile</Text>}
        onLeftPress={() => setShowDrawer(!showDrawer)}
        onRightPress={() => setShowToast(true)}
      />

      {showDrawer && (
        <Drawer
          items={drawerItems}
          onItemPress={(item) => console.log(`${item.label} pressed`)}
        />
      )}

      <Tabs
        tabs={tabs}
        initialTabIndex={0}
      />

      {/* <Footer
        leftContent={<Text>Left Content</Text>}
        centerContent={<Text>Center Content</Text>}
        rightContent={<Text>Right Content</Text>}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});

export default App;
