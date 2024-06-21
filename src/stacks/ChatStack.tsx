import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../screens/Chat/Chat';
import { IconLibrary } from '../components/Icons/IconsLibarary';


const Stack = createNativeStackNavigator();

export const ChatStack = ({navigation}) => {
  return (
    <Stack.Navigator 
    screenOptions={{headerTitleAlign: 'center',contentStyle: { paddingTop: 20 },headerTitleStyle: {fontSize:18}, headerLeft:()=>(
      <IconLibrary.Octicons name='arrow-left' onPress={navigation.goBack()} size={24} color="#333434" />
    )}}>
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};
