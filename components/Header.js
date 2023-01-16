import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../assets/svg/(sem fundo) GLAM - LOGO.svg';



const Header = (props) => {
  return (
    <View style={styles.header}>
      <Logo width={RFValue(59.69)} height={RFValue(34.72)} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 60,
    marginTop: RFValue(54.25),
    marginLeft: RFValue(21.71),
  },

  text: {
    fontSize: 20,
    marginLeft: 10,
  },
});
export default Header;