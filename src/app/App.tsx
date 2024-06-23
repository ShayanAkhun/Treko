import React, { createContext, useContext, useEffect, useState,ReactNode } from 'react';
import { View, Alert, ActivityIndicator } from 'react-native';
import { ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// @ts-ignore
import { MainTabs } from '../Tabs/MainTabs.tsx';
import SignUp from '../screens/SignUp/signUp.tsx';
import Login from '../screens/Login/Login.tsx';
import ChatScreen from '../screens/Chat/Chat.tsx';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../config/firebase.js';

const RootStack = createNativeStackNavigator();
interface AuthenticatedUserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthenticatedUserContext = createContext<AuthenticatedUserContextType | undefined>(undefined);


const AuthenticatedUserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function ChatStack() {
  return (

    <RootStack.Navigator initialRouteName="History" screenOptions={{headerShown:false}} >
    <RootStack.Screen name='MainTabs' component={MainTabs}/>
    {/* <RootStack.Screen name="Chat" component={ChatScreen} /> */}
  </RootStack.Navigator>
  )
}

function AuthStack() {
  return (

    <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="SignUp" component={SignUp} />
  </RootStack.Navigator>
  )
}

function RootNavigator() {
  const context = useContext(AuthenticatedUserContext);
  if (!context) {
    throw new Error('RootNavigator must be used within an AuthenticatedUserProvider');
  }
  const { user, setUser } = context;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (authenticatedUser) => {
      setUser(authenticatedUser ? authenticatedUser : null);
      setIsLoading(false);
    });
    return unsubscribeAuth;
  }, [setUser]);
  
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {user ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <AuthenticatedUserProvider>
          {/* <RootStack.Navigator initialRouteName="Chat" screenOptions={{headerShown:false}}>

        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name='MainTabs' component={MainTabs}/> */}
          {/* </RootStack.Navigator> */}
        <RootNavigator />
      </AuthenticatedUserProvider>
    </ThemeProvider>
  );
}

export default App;
