/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import Dolar from '../../../assets/image/Dolar.svg'

const SPLASH = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 5000)
  });

  return (
    <View style={styles.container}>
      <View style={styles.dolar}>
        <Dolar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  dolar: {
    backgroundColor: '#02CF8E',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: '100%',
    paddingBottom: '100%',
  },
});

export default SPLASH;