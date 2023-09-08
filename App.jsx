
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Screen1 from "./pages/Screen1";
import Screen2 from "./pages/Screen2";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1'>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
  </NavigationContainer>
}

export default App;
