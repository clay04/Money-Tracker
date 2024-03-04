import React from 'react';
import {View} from 'react-native';
import Dolar from './svg/Dolar.svg';

const App = () => {
  return (
    <View style={{backgroundColor: '#02CF8E', flex: 1}}>
      <View>{Dolar}</View>
    </View>
  );
};

export default App;
