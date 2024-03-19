import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const index = ({
  label,
  backgroundColor = '#02CF8E',
  textColor = '#020202',
  borderRadius = 8,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container(backgroundColor, borderRadius)}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: (backgroundColor, borderRadius) => ({
    backgroundColor: backgroundColor,
    paddingVertical: 12,
    borderRadius: borderRadius,
  }),

  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColor,
  }),
});
