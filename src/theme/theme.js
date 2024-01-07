import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import colors from './colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};

export default theme;
