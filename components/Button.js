import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useFonts } from 'expo-font';

const Button = (props) => {

  const [fontsLoaded] = useFonts({
    'Nunito-Sans': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <TouchableOpacity
      style={[styles.button, { width: props.width, height: props.height, backgroundColor: props.color , borderRadius: props.radius}]}
      onPress={props.onPress}
    >
      <Text style={[styles.buttonText, {color:props.colorFont}]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: RFValue(10)

  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: RFValue(16),
    fontWeight: "600",
    lineHeight: RFValue(21.82),
    fontFamily: 'Nunito-Sans',

  },
});

export default Button;