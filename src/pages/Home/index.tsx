import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {Button, Gap, PageHeader} from '../../components';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <PageHeader label="Money Tracker" text="Track your money" type="withPhoto"/>
        <Gap height={24} />
      </View>
      <View style={styles.containerWrapper}>
        <Text style={styles.text}>Your Balance</Text>
        <Text style={styles.Rp}>Rp. 00.000.000</Text>
        <Gap height={14} />
        <View style={styles.garis} />
        <Gap height={14} />
        <View style={styles.cash}>
          <Text style={styles.textCash}>Cash on Hand</Text>
          <Text style={styles.RpCash}>Rp. 0.000.000</Text>
        </View>
        <View style={styles.cash}>
          <Text style={styles.textCash}>Cash on Bank</Text>
          <Text style={styles.RpCash}>Rp. 0.000.000</Text>
        </View>
        <Gap height={50} />
      </View>
      <Gap height={24} />
      <View style={styles.containerWrapper}>
        <Text style={styles.text}>Add Transaction</Text>
        <Button
          label="Cash On Hand"
          onPress={() => navigation.navigate('CashOnHand')}
        />
        <Gap height={14} />
        <Button
          label="Cash On Bank"
          onPress={() => navigation.navigate('CashOnBank')}
        />
        <Gap height={50} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  profilePicture: {
    width: 90,
    height: 90,
    borderRadius: 100,
    overflow: 'hidden',
  },

  textHeader: {
    color: '#020202',
  },

  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#000000',
  },

  containerWrapper: {
    padding: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },

  Rp: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
  },

  garis: {
    borderWidth: 0.5,
    borderBottomColor: '#000000',
  },

  textCash: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
    width: 115,
  },

  RpCash: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#000000',
    marginLeft: 20,
    textAlign: 'center',
  },

  cash: {
    flexDirection: 'row',
  },
});
