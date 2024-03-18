import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackButton from '../../../assets/image/BackButton.svg';

const PageHeader = ({label, backButton}) => {
  return (
    <View style={styles.container}>
      {backButton && <BackButton style={styles.BackButton} />}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    fontFamily: 'Poppins-Medim',
    fontSize: 22,
    color: '#020202',
  },

  BackButton: {
    marginRight: 26,
  },
});
