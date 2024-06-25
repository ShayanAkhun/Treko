import React from 'react';
import { View, Text } from 'react-native';
import Menu from '../screens/Menu/Menu';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export  const MenuStack = () => {
  return (
    <Stack.Navigator initialRouteName="Find">
    <Stack.Screen
      name="LocationScreen"
      component={Menu}
      options={{
        headerShown: false,
        title: 'Find',
      }}
    />
  </Stack.Navigator>
  );
}


