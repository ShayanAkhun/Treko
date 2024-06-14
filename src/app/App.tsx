
import React from 'react';
import {
  TouchableOpacity,
    Text,
  StyleSheet,
  ActivityIndicator,
  useColorScheme,
  View,
} from 'react-native';
import { ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from '@rneui/themed';
import { Input } from '@rneui/themed';
import {IconLibrary} from "../components/Icons/IconsLibarary.tsx";
// @ts-ignore
import MainLogo from "../assets/mainLogo.png"
import {HistoryStack} from "../stacks/HistoryStack.tsx";
import {MainTabs} from "../Tabs/MainTabs.tsx";

const RootStack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <View style={styles.view}>
        <Image source={MainLogo} style={styles.image} PlaceholderContent={<ActivityIndicator />} />
        <View style={{ display: 'flex', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', bottom: 8, fontWeight: '400', fontSize: 18, color: '#9098B1' }}>Log in to continue</Text>
          <Input
              placeholder="Email"
              placeholderTextColor="#9098B1"
              inputContainerStyle={styles.inputContainer}
              leftIcon={ <IconLibrary.Octicons name="mail" size={24} color="#333434" />}
          />
          <Input
              placeholder="Password"
              placeholderTextColor="#9098B1"
              inputContainerStyle={styles.inputContainer}
              leftIcon={ <IconLibrary.Octicons name="lock" size={24} color="#333434" />}
          />
        </View>
        <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('Details')}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
  );
}



function App(): React.JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';
  return (
      <ThemeProvider>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <RootStack.Screen name="Home" component={HomeScreen}   />
            <RootStack.Screen name="Details" component={MainTabs} />
          </RootStack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
  );
}



export default App;
// @ts-ignore
const styles = StyleSheet.create({

  view: {
    display: 'flex',
    alignContent: 'center',
    height: "100%",
    backgroundColor: '#ffffff',
    
  },
  image: {
    top: "40%",
    left: '35%',
    width: '40%',
    height: "50%",
    
  },
  LoginButton : {
    width: '95%', 
    height: 60,
    borderRadius: 10,
    backgroundColor: '#09648c',
    padding: 10,
    margin:10,
    color: '#ffffff',
    marginTop:30
  },
  loginText : {textAlign:'center', color: '#ffffff',top:6},
  forgotText: {textAlign: 'right',right: 20,fontWeight:"700", color : '#09648c'},

  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C4C4C4',
    height: 70,
    padding: 10,
  },

})