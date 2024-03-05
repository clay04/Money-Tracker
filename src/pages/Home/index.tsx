import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  const handleGoTO = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>Money Tracker</Text>
        <Text>Track Your Mony</Text>
      </View>
      <View>
        <Text>Your Balance</Text>
      </View>
      <View>
        <Text>Cash on Hand</Text>
        <Text>Cash on Bank</Text>
      </View>
      <View>
        <Text>Add Transaction</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGoTO('CashOnHand')}>
          <Text style={styles.textButton}>Cash On Hand</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGoTO('CashOnBank')}>
          <Text style={styles.textButton}>Cash On Bank</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

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
