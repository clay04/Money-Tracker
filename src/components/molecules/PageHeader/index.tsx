import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackButton from '../../../assets/image/BackButton.svg';

const PageHeader = ({label, backButton, text, onPress}) => {
  return (
    <View style={styles.container}>
      {backButton && <BackButton style={styles.BackButton} onPress={onPress}/>}
      <View>
        <Text style={styles.label}>{label}</Text>
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
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
    fontWeight: '500',
  },

  BackButton: {
    marginRight: 26,
  },

  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#8D92A3',
  }
});
