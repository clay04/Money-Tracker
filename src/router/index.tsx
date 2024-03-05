import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SPLASH, SignIn, SignUp} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SPLASH} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Router;
