import React, { createContext, useContext, useState, ReactNode } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabs } from '../Tabs/MainTabs';
import SignUp from '../screens/SignUp/signUp';
import Login from '../screens/Login/Login';
import '../components/ActionSheet/sheets';


const RootStack = createNativeStackNavigator();






function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Login"
          screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="Login" component={Login} />
          <RootStack.Screen name="SignUp" component={SignUp} />
          <RootStack.Screen name='MainTabs' component={MainTabs} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
