import { StatusBar } from 'expo-status-bar';
import React from 'react';

// import Welcome from './screens/Welcome';

// import Bmi from './screens/Bmi';
// import Item from './components/Item';
// import Network from './components/Network';

import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import FlexStack from './navigations/FlexStack';
import BottomTab from './navigations/BottomTab';
import SecondBottomTab from './navigations/SecondBottomTab';
import { createStackNavigator } from '@react-navigation/stack';
import flexscreen from './screens/flexscreen';
import { Button } from 'react-native';
import TodoTab from './navigations/TodoTab';
import { fb } from './db_config';

const RootStack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      {/* <FlexStack /> */} 
      {/* {/* <BottomTab /> */}
      <RootStack.Navigator initialRouteName="BottomTab">
        <RootStack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ title: 'Main', headerShown: false }}
        />

        <RootStack.Screen
          name="SecondBottomTab"
          component={SecondBottomTab}
          options={{ title: 'Second Tab' }}
        />

        <RootStack.Screen
          name="TodoTab"
          component={TodoTab}
          options={{ title: 'Todo Tab' }}
        />





      </RootStack.Navigator>





    </NavigationContainer>




  );
}



