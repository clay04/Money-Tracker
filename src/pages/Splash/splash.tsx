/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Logo } from '../../assets/icon';

const SPLASH = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#02CF8E',
    flex: 1,
  },

  text: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 32,
    lineHeight: 48,
    color: '#020202',
  },
});

export default SPLASH;
