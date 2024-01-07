import { adaptNavigationTheme, MD3LightTheme } from 'react-native-paper';
import { DefaultTheme } from '@react-navigation/native';
import colors from './colors';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...colors,
  },
};

/**
 * According to node_modules/@react-navigation/native/src/theming/DefaultTheme.tsx
 * and Type from node_modules/@react-navigation/native/src/types.tsx
 * @type {{dark: boolean, colors: {border: string, notification: string, background: string, text: string, card: string, primary: string}}}
 */
const navigationTheme = {
  dark: false, // Set to true if you have a dark theme
  colors: {
    primary: colors.primary, // Your primary color
    background: colors.background, // Background color of your screens
    card: colors.surface, // Card background, like in modal backgrounds
    text: colors.onBackground, // Primary text color
    border: colors.outline, // Color for borders, lines, etc.
    notification: colors.error, // Notification color, like for badges
  },
};

export { theme, navigationTheme };
