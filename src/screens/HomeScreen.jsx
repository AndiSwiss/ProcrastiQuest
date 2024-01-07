import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

function HomeScreen({ navigation }) {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        color={theme.colors.primary}
      />
    </View>
  );
}

export default HomeScreen;
