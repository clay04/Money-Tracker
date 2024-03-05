import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const SignIn = ({navigation}) => {
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

  const handleGoTO = (screen) => {
    navigation.navigate(screen)
  }

  const ActionButton = () => {
    return (
      <View>
        <TouchableOpacity style={styles.buttonSignIn} onPress={() => handleGoTO('Home')}>
          <Text style={styles.textButtonSignIn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNew} onPress={() => handleGoTO('SignUp')}>
          <Text style={styles.textButtonNew}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text2}>Sign In</Text>
        <Text style={styles.textInput}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your email address"
          placeholderTextColor={'#8D92A3'}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={handleEmailChange}
        />
        <Text style={styles.textInput}>Password</Text>
        <TextInput
          placeholder="Type your password"
          placeholderTextColor={'#8D92A3'}
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
        />
        <ActionButton />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },

  text2: {
    fontSize: 22,
    color: '#020202',
    fontWeight: '500',
    marginBottom: 100,
    fontFamily: "Poppins-Medium",
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
    fontFamily: "Poppins-Medium",
  },

  textInput: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
    lineHeight: 24,
    fontFamily: "Poppins-Medium",
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
    fontFamily: "Poppins-Medium",
  },

  textButtonNew: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    fontFamily: "Poppins-Medium",
  },
});

export default SignIn;
