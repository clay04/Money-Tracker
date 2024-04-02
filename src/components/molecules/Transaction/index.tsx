import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Transaction = ({label, date, type, cash}) => {
  const cashColor = cash.includes('-') ? 'red' : 'green';

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.ContainerWrapper}>
        <View>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.type}>{type}</Text>
        </View>
        <Text style={[styles.cash, {color: cashColor}]}>{cash}</Text>
      </View>
    </View>
  )
}

export default Transaction

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Bold',
    color: '#020202',
    fontSize: 16,
  },
  ContainerWrapper: {
    padding: 25,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor:  '#ECECEC',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
  	  width: 0,
	    height: 1,
    },
    shadowOpacity: 0.22,
    sadowRadius: 2.22,
    elevation: 3,
  },
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3'
  },
  type: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202'
  },
  cash: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
  }
})