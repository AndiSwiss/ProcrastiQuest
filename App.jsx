import * as React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';
import { expo } from './app.json';
import { navigationTheme, theme } from './src/theme/theme';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import SubDetailsScreen from './src/screens/SubDetailsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: navigationTheme,
  materialLight: theme,
});

function DetailsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="SubDetails" component={SubDetailsScreen} />
    </Stack.Navigator>
  )
}

export default function Main() {

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={LightTheme}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'DetailsStack') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.scrim,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="DetailsStack" component={DetailsStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => Main);
