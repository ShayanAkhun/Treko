import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HistoryScreen from '../screens/History/History.tsx';
import CardSheet from '../components/ActionSheet/CardSheet.tsx';
import Card from '../components/Card/Card.tsx';

const Stack = createNativeStackNavigator();

export const HistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        title: 'Employee List',
        headerTitleStyle: {fontSize: 18, color: '#09648C'},
      }}>
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name='Card' component={Card}/>
    </Stack.Navigator>
  );
};
