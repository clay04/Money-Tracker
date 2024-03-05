import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

const CashOnBank = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text>Cash On Bank</Text>
        </View>
    </View>
  );
};

export default CashOnBank;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#ffffff',
        flex: 1,
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
