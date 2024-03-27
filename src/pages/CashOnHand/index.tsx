import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {PageHeader} from '../../components';

const CashOnHand = navigation => {
  return (
    <ScrollView>
      <PageHeader
        label="Cash On Hand"
        backButton={true}
        onPress={() => navigation.navigate('Home')}
      />
    </ScrollView>
  );
};

export default CashOnHand;

const styles = StyleSheet.create({});
