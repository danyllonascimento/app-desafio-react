import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import Container from '../components/Container';
import Logo from '../assets/svg/(sem fundo) GLAM - LOGO.svg';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import Tabs from '../Tabs';
import { NavigationContainer } from '@react-navigation/native';


export default function Login(props) {
  const [fontsLoaded] = useFonts({
    'Nunito-Sans': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (


    <View style={{ backgroundColor: "white" }}>
      <Container marginTop={50}>
        <Logo width={83} height={48} />


      </Container>

      <Container marginTop={32}>
      </Container>




    </View>

  );
}


const styles = StyleSheet.create({
  image: {
    marginTop: RFValue(30),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  baseText: {
    fontStyle: 'Mixed',
    fontSize: RFValue(16),
    fontFamily: 'Nunito-Sans',
    align: 'center',
  },
  innerText: {
    color: '#F28F8F',
    fontWeight: '600'
  },

  paragraphStyle: {
    marginTop: RFValue(12),
    fontSize: RFValue(12),
    fontFamily: 'Nunito-Sans',
    textAlign: 'center',
    justifyContent: 'center',
    lineHeight: RFValue(16),
    align: 'center',

  },
});


