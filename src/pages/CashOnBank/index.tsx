import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Button,
  Gap,
  PageHeader,
  TextInput,
  Transaction,
} from '../../components';

const CashOnHand = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Cash On Bank"
        backButton={true}
        onPress={() => navigation.navigate('Home')}
      />
      <Gap height={24} />
      <View style={styles.containerWrapper}>
        <Gap height={24} />
        <TextInput label="Description" placeholder="Add the description" />
        <Gap height={16} />
        <TextInput label="Type" placeholder="Debit / Credit" />
        <Gap height={24} />
        <Button label="Save" />
        <Gap height={50} />
      </View>
      <Gap height={24} />
      <View style={styles.containerWrapper}>
        <Gap height={10} />
        <Transaction
          label="Last 3 Transaction"
          date="17 April 2024"
          type="Water, Food"
          cash="-Rp 300.000"
        />
        <Transaction
          date="17 April 2024"
          type="Water, Food"
          cash="-Rp 300.000"
        />
        <Transaction
          date="17 April 2024"
          type="Water, Food"
          cash="+Rp 300.000"
        />
      </View>
    </ScrollView>
  );
};

export default CashOnHand;

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
