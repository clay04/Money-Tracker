import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
