import * as React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

function HomeScreen() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
