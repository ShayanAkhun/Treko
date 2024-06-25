import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../screens/Chat/Chat';


const Stack = createNativeStackNavigator();

export const ChatStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerTitleAlign: 'center',headerTitleStyle: {fontSize:18,color: '#09648C'}, }}>
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};
