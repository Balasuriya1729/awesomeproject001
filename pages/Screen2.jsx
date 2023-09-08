import React from 'react';
import { View, Text } from "react-native";


function Screen2() {
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

export default Screen2;