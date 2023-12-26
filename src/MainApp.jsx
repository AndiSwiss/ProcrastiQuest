import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function App() {
  const insets = useSafeAreaInsets();

  return (
      <View style={{ flex: 1, paddingTop: insets.top }}>
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
