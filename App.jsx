import * as React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';
import { expo } from './app.json';
import { navigationTheme, theme } from './src/theme/theme';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: navigationTheme,
  materialLight: theme,
});

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={LightTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => Main);
