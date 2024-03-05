import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SignUp from '../pages/SignUp';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text: React.SetStateAction<string>) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: React.SetStateAction<string>) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Password: ', password);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text2}>Sign In</Text>
        <Text style={styles.textInput}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your email address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={handleEmailChange}
        />
        <Text style={styles.textInput}>Password</Text>
        <TextInput
          placeholder="Type your password"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
        />
        <TouchableOpacity style={styles.buttonSignIn} onPress={handleSubmit}>
          <Text style={styles.textButtonSignIn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNew} onPress={handleSubmit}>
          <Text style={styles.textButtonNew}>Create New Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    fontFamily: 'Poppins',
  },

  text2: {
    fontSize: 22,
    color: '#020202',
    fontWeight: '500',
    marginBottom: 100,
  },

  input: {
    width: '100%',
    height: '40px',
    borderWidth: 1,
    borderColor: '#020202',
    marginTop: 8,
    marginBottom: 25,
    paddingHorizontal: 10,
    borderRadius: 8,
    padding: 8,
  },

  textInput: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
    lineHeight: 24,
  },

  buttonSignIn: {
    color: 'red',
    backgroundColor: '#02CF8E',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 8,
    width: '100%',
    height: 45,
    borderColor: '#ffffff',
  },

  buttonNew: {
    color: 'red',
    backgroundColor: '#8D92A3',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 8,
    width: '100%',
    height: 45,
    borderColor: '#ffffff',
  },

  textButtonSignIn: {
    color: '#020202',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
  },

  textButtonNew: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
  },
});

export default SignIn;
