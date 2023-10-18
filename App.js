import * as React from 'react';
import { StyleSheet, View, Text ,Button, Pressable,Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './page/HomeScreen';
import SelectScreen from './page/SelectScreen';
import DetailsScreen from './page/DetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name=" " component={HomeScreen} />
      <Stack.Screen name="Select" component={SelectScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

export default App;