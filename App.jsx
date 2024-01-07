import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { expo } from './app.json';
import MainApp from './src/MainApp';
import theme from './src/theme/theme';

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <MainApp />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => Main);
