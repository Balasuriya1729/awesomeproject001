
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  return <View style={{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  }}>
    <Text style={{
      fontSize: 20,
      textAlign: 'center',
      color: 'tomato'
    }}>
      This is a Second Screen From Different App
      And it Worked 🎉
    </Text>
  </View>
}

export default App;
