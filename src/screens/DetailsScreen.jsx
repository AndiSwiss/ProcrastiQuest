import * as React from 'react';
import { useTheme } from 'react-native-paper';
import { Text, View } from 'react-native';

function DetailsScreen() {
  const theme = useTheme();
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.surfaceVariant,
    }}
    >
      <Text>Details Screen</Text>
    </View>
  );
}

export default DetailsScreen;
