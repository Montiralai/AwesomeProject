import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex6() {
  return (
    <View style={{flex : 3 ,flexDirection : 'column',justifyContent:'center',alignItems : 'center'}}>    
      <View style={{ backgroundColor : '#50E3C2' , height : 100,width : 100 }}></View>
       <View style={{ backgroundColor : '#4A90E2' , height : 100,width : 100  }}></View>
       <View style={{ backgroundColor : '#9013FE' , height : 100 ,width : 100 }}>
        </View>      
    </View>
  );
}
