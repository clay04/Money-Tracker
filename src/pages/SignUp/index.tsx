// SignUp.js

import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Gap, PageHeader, TextInput, Button } from '../../components';
const SignUp = ({ navigation }) => {
  const [avatar, setAvatar] = useState(null);

  const handleChoosePhoto = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      console.log('ImagePicker Response: ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setAvatar(source);
      }
    });
  };

  const handleSubmit = () => {
    console.log('Avatar URI: ', avatar ? avatar.uri : 'No avatar selected');
  };

  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Sign Up"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />
      <View style={styles.containerWrapper}>
        <Gap height={16} />
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
            {avatar && (
              <ImageBackground source={avatar} style={styles.profilePicture} />
            )}
            {!avatar && <Text style={styles.textButton}>Add Photo</Text>}
          </TouchableOpacity>
        </View>
        <Gap height={26} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {},
  containerWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  containerButton: {
    alignItems: 'center',
  },
  button: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#8D92A3',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  textButton: {
    backgroundColor: '#F0F0F0',
    color: '#8D92A3',
    textAlign: 'center',
    borderRadius: 100,
    width: 90,
    height: 90,
    paddingHorizontal: 15,
    paddingVertical: 18,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },

  profilePicture: {
    width: 90,
    height: 90,
    borderRadius: 100,
    overflow: 'hidden',
  },
});

export default SignUp;
