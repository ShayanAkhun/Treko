import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Image} from '@rneui/themed';
import {Input} from '@rneui/themed';
import {IconLibrary} from '../../components/Icons/IconsLibarary';
// @ts-ignore
import MainLogo from '../../assets/mainLogo.png';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

 

  return (
    <View style={styles.view}>
      <Image
        source={MainLogo}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={{display: 'flex', justifyContent: 'center'}}>
        <Text
          style={{
            textAlign: 'center',
            bottom: 8,
            fontWeight: '400',
            fontSize: 18,
            color: '#9098B1',
          }}>
          Register to continue
        </Text>
        <Input
          placeholder="Email"
          placeholderTextColor="#9098B1"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}
          inputContainerStyle={styles.inputContainer}
          leftIcon={
            <IconLibrary.Octicons name="mail" size={24} color="#333434" />
          }
        />
        <Input
          placeholder="Password"
          placeholderTextColor="#9098B1"
          inputContainerStyle={styles.inputContainer}
          secureTextEntry={true}
          textContentType="password"
          autoCorrect={false}
          value={password}
          onChangeText={text => setPassword(text)}
          leftIcon={
            <IconLibrary.Octicons name="lock" size={24} color="#333434" />
          }
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#09648c" />
      ) : (
        <TouchableOpacity style={styles.LoginButton} onPress={()=> navigation.navigate("Login")}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
      )}
      <View style={styles.sigupView}>
        <Text style={styles.signup}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signin}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  image: {
    top: '40%',
    left: '35%',
    width: '40%',
    height: '50%',
  },
  LoginButton: {
    width: '95%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#09648c',
    padding: 10,
    margin: 10,
    color: '#ffffff',
    marginTop: 30,
  },
  loginText: {textAlign: 'center', color: '#ffffff', top: 6},
  forgotText: {
    textAlign: 'right',
    right: 20,
    fontWeight: '700',
    color: '#09648c',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C4C4C4',
    height: 70,
    padding: 10,
  },
  sigupView: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  signup: {
    color: 'gray',
    fontWeight: '600',
    fontSize: 14,
  },
  signin: {
    color: '#09648C',
    fontWeight: '600',
    fontSize: 14,
  },
});
