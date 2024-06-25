import React from 'react';
import { View, Text } from 'react-native';
import settingScreen from '../screens/Setting/settingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProfileSetting from '../screens/Setting/userProfileSetting';


export const SettingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator 
    screenOptions={{headerShown :false} }>
      <Stack.Screen name="Setting" component={settingScreen} />
      <Stack.Screen name="userSetting" component={UserProfileSetting} />
    </Stack.Navigator>
  );
}


