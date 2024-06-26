import { View, Text } from 'react-native'
import React from 'react'
import EmployeeList from '../screens/EmployeeList/EmployeeList'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const list = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="list" component={EmployeeList} />
  </Stack.Navigator>
  )
}

export default list