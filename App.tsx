import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import SPLASH from './page/splash';
import SignIn from './page/LogIn/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Ubah angka 3000 dengan durasi splash screen yang diinginkan (dalam milidetik)

    // Bersihkan timer pada saat komponen unmount atau splash screen sudah tidak ditampilkan
    return () => clearTimeout(splashTimer);
  }, []); // Gunakan array kosong sebagai dependensi untuk memastikan useEffect hanya dijalankan sekali saat komponen pertama kali dirender

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
