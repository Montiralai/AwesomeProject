import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, Text } from 'react-native';


export default function Item(props) {
   return (
      <View style={{ flexDirection: 'row' }}>


         <Image
            source={ {uri: props.image}}
            style={{ width: 150, height: 180 }}
         />
         <View style={{
            flex: 1,
            flexDirection: 'column',
            paddingHorizontal: 20,
         }}>
            <Text style={{ fontSize: 20 }}>Title : {props.title} {props.releaseYear}  </Text>

            
         </View>



      </View>

   );
}
