import React from 'react';
import {View, Text} from 'react-native';
import Menu from '../screens/Menu/Menu';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LocationScreen from '../screens/Location/Location';
import HistoryScreen from '../screens/History/History';
import CardSheet from '../components/ActionSheet/CardSheet';

const Stack = createNativeStackNavigator();
export const MenuStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 18, color: '#09648C'},
      }}>
      <Stack.Screen name="Dashboard" component={Menu} />
      <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="CardSheet" component={CardSheet} />
    </Stack.Navigator>
  );
};
