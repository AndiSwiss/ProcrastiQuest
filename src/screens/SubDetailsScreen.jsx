import * as React from 'react';
import { useTheme } from 'react-native-paper';
import { Text, View } from 'react-native';

function SubDetailsScreen() {
  const theme = useTheme();
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.surfaceVariant,
    }}
    >
      <Text>Sub-Details</Text>
    </View>
  );
}

export default SubDetailsScreen;
