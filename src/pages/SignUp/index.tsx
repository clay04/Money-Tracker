import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleEmailChange = (text: React.SetStateAction<string>) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: React.SetStateAction<string>) => {
    setPassword(text);
  };

  const handleChoosePhoto = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};

        setAvatar(source);
      }
    });
  };

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Password: ', password);
    console.log('Avatar URI: ', avatar ? avatar.uri : 'No avatar selected');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text2}>Sign Up</Text>
        <Text style={styles.textInput}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Type your full name" />
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
        <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
          <Text style={styles.textButton}>Choose Photo</Text>
        </TouchableOpacity>
        {avatar && (
          <Image source={avatar} style={{width: 100, height: 100}} />
        )}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textButton}>Continue</Text>
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
    height: 40,
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

  button: {
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

  textButton: {
    color: '#020202',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
  },
});

export default SignUp;
