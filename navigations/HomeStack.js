import * as React from 'react';

import BmiScreen from '../screens/BmiScreen';
import NetworkScreen from '../screens/NetworkScreen';
import HomeScreen from '../screens/HomeScreen';
import flexscreen from '../screens/flexscreen';
import { createStackNavigator } from '@react-navigation/stack';

import NetworkCreateScreen from '../screens/NetworkCreateScreen';




const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: 'Home Title' }}
            />
            <Stack.Screen
                name="BmiScreen"
                component={BmiScreen}
                options={{ title: 'Bmi Screen Title' }}
            />
            <Stack.Screen
                name="NetworkScreen"
                component={NetworkScreen}
                options={{ title: 'Network Screen Title' }}
            />
            <Stack.Screen
                name="NetworkCreateScreen"
                component={NetworkCreateScreen}
                options={{ title: 'Movie Create Title' }}
            />
           
            

        </Stack.Navigator>
    );

}