import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, PageHeader, Gap, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader label="Sign In" backButton={false} />
      <Gap height={24} />
      <View style={styles.containerWrapper}>
        <Gap height={26} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Sign In" onPress={() => navigation.navigate('Home')} />
        <Gap height={12} />
        <Button
          label="Add New Account"
          backgroundColor="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
});
