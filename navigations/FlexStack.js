import * as React from 'react';


import { createStackNavigator } from '@react-navigation/stack';

import NetworkCreateScreen from '../screens/NetworkCreateScreen';
import flexscreen from '../screens/flexscreen';
import Ex1 from '../screens/Ex1';
import Ex2 from '../screens/Ex2';
import Ex3 from '../screens/Ex3';
import Ex4 from '../screens/Ex4';
import Ex5 from '../screens/Ex5';
import Ex6 from '../screens/Ex6';
import Ex7 from '../screens/Ex7';
import Ex8 from '../screens/Ex8';
import Ex9 from '../screens/Ex9';
import Ex10 from '../screens/Ex10';
import Ex11 from '../screens/Ex11';
import Ex12 from '../screens/Ex12';



const Stack = createStackNavigator();

export default function FlexStack() {
    return (
        <Stack.Navigator initialRouteName="flexscreen">
            
            <Stack.Screen
                name="flexscreen"
                component={flexscreen}
                options={{ title: 'Flex Title' }}
            />
             <Stack.Screen
                name="Ex1"
                component={Ex1}
                options={{ title: 'EX1' }}
            />
             <Stack.Screen
                name="Ex2"
                component={Ex2}
                options={{ title: 'EX2' }}
            />
             <Stack.Screen
                name="Ex3"
                component={Ex3}
                options={{ title: 'EX3' }}
            />
             <Stack.Screen
                name="Ex4"
                component={Ex4}
                options={{ title: 'EX4' }}
            />
             <Stack.Screen
                name="Ex5"
                component={Ex5}
                options={{ title: 'EX5' }}
            />
             <Stack.Screen
                name="Ex6"
                component={Ex6}
                options={{ title: 'EX6' }}
            />
             <Stack.Screen
                name="Ex7"
                component={Ex7}
                options={{ title: 'EX7' }}
            />
             <Stack.Screen
                name="Ex8"
                component={Ex8}
                options={{ title: 'EX8' }}
            />
             <Stack.Screen
                name="Ex9"
                component={Ex9}
                options={{ title: 'EX9' }}
            />
             <Stack.Screen
                name="Ex10"
                component={Ex10}
                options={{ title: 'EX10' }}
            />
             <Stack.Screen
                name="Ex11"
                component={Ex11}
                options={{ title: 'EX11' }}
            />
             <Stack.Screen
                name="Ex12"
                component={Ex12}
                options={{ title: 'EX12' }}
            />

            

        </Stack.Navigator>
    );

}