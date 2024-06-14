import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from "../screens/History/History.tsx";
const Stack = createNativeStackNavigator();

export const HistoryStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Details" component={HistoryScreen}  />
        </Stack.Navigator>
    );
};
