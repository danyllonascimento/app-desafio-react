import React from 'react';
import { useFonts } from 'expo-font';
import { Routes } from './Routes';
import { NavigationContainer } from '@react-navigation/native';



export default function App(props) {
  const [fontsLoaded] = useFonts({
    'Nunito-Sans': require('./assets/fonts/NunitoSans-SemiBold.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>



  );
}


