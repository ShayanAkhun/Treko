import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { View, Alert, ActivityIndicator } from 'react-native';
import { ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabs } from '../Tabs/MainTabs';
import SignUp from '../screens/SignUp/signUp';
import Login from '../screens/Login/Login';
import { SheetProvider } from 'react-native-actions-sheet';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../config/firebase';
import Menu from '../screens/Menu/Menu';

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
    <RootStack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainTabs" component={MainTabs} />
    </RootStack.Navigator>
  );
}

function AuthStack() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="SignUp" component={SignUp} />
    </RootStack.Navigator>
  );
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
    <SheetProvider>
      <ThemeProvider>
        <AuthenticatedUserProvider>
          <RootNavigator />
        </AuthenticatedUserProvider>
      </ThemeProvider>
    </SheetProvider>
  );
}

export default App;
