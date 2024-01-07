import * as React from 'react';
import { useTheme } from 'react-native-paper';
import { Button, Text, View } from 'react-native';

function DetailsScreen({ navigation }) {
  const theme = useTheme();
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <Text>Details Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('SubDetails')}
        color={theme.colors.primary}
      />

    </View>
  );
}

export default DetailsScreen;
