import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Divider />
      <Text>Open up App.js to start working on your app!</Text>
      <Divider />
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <Divider />
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </View>
  );
}
