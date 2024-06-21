import React, { createContext, useState } from 'react';
import {View, Alert} from 'react-native';
import {ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// @ts-ignore
import {MainTabs} from '../Tabs/MainTabs.tsx';
import SignUp from '../screens/SignUp/signUp.tsx';
import Login from '../screens/Login/Login.tsx';

const RootStack = createNativeStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
function HomeScreen({navigation}) {
  return (
    <View>
      <Login navigation={navigation} />
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="MainTabs" component={MainTabs} />
          <RootStack.Screen name="SignUp" component={SignUp} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
// @ts-ignore
