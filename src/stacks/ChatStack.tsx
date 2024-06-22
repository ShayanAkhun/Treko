import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../screens/Chat/Chat';
import { IconLibrary } from '../components/Icons/IconsLibarary';


const Stack = createNativeStackNavigator();

export const ChatStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerTitleAlign: 'center',contentStyle: { paddingTop: 20 },headerTitleStyle: {fontSize:18}, }}>
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};
