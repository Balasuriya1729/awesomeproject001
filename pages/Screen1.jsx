import React from 'react';
import { View, Text, Button } from "react-native";


export default function Screen1({navigation}) {
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
          This is a First Screen From Different App
          Click the Below Button to see if it go to next screen
        </Text>
        <Button
            
            title='Go To Next Page'
            onPress={() => {
                console.log("Clicked Button");
                navigation.navigate('Screen2')
            }}
         />
      </View>
}
