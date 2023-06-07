import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default function JavaScriptScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>JavaScript screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
  );
}
