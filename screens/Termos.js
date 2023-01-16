import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView,
  ScrollView, TouchableOpacity
} from 'react-native';
import Logo from '../assets/svg/(sem fundo) GLAM - LOGO.svg';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import Container from '../components/Container';




export default function Termos(props) {
  const [fontsLoaded] = useFonts({
    'Nunito-Sans': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (

    <View style={{ backgroundColor: "white" }}>
      <Container marginTop={30}>
        <Text style={styles.baseText}>Termos de Serviço</Text>

      </Container>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>1. Termos</Text>
          <Text style={styles.paragraph}>
            <Text>        </Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi. Auctor eu augue ut lectus arcu bibendum at. Sit amet consectetur adipiscing elit ut aliquam purus. Enim ut sem viverra aliquet. Nam at lectus urna duis convallis. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Sagittis vitae et leo duis ut. Aliquam ut porttitor leo a diam sollicitudin. Nunc consequat interdum varius sit amet mattis. Massa eget egestas purus viverra accumsan. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Et malesuada fames ac turpis egestas sed. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.
            {'\n'}
            <Text>     </Text>  Lectus urna duis convallis convallis tellus id interdum velit laoreet. Nulla malesuada pellentesque elit eget gravida. Ut morbi tincidunt augue interdum. Tellus integer feugiat scelerisque varius morbi. Nec dui nunc mattis enim ut. Pharetra magna ac placerat vestibulum. Nec nam aliquam sem et. Nibh praesent tristique magna sit amet purus gravida. Vitae ultricies leo integer malesuada nunc vel risus. Dui id ornare arcu odio ut sem nulla. Habitasse platea dictumst quisque sagittis purus sit. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Et tortor consequat id porta nibh venenatis cras sed.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi. Auctor eu augue ut lectus arcu bibendum at. Sit amet consectetur adipiscing elit ut aliquam purus. Enim ut sem viverra aliquet. Nam at lectus urna duis convallis. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Sagittis vitae et leo duis ut. Aliquam ut porttitor leo a diam sollicitudin. Nunc consequat interdum varius sit amet mattis. Massa eget egestas purus viverra accumsan. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Et malesuada fames ac turpis egestas sed. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.
            
            {'\n'}
            <Text>     </Text>Lectus urna duis convallis convallis tellus id interdum velit laoreet. Nulla malesuada pellentesque elit eget gravida. Ut morbi tincidunt augue interdum. Tellus integer feugiat scelerisque varius morbi. Nec dui nunc mattis enim ut. Pharetra magna ac placerat vestibulum. Nec nam aliquam sem et. Nibh praesent tristique magna sit amet purus gravida. Vitae ultricies leo integer malesuada nunc vel risus. Dui id ornare arcu odio ut sem nulla. Habitasse platea dictumst quisque sagittis purus sit. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Et tortor consequat id porta nibh venenatis cras sed.

          </Text>

        </ScrollView>

      </SafeAreaView>


    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    marginLeft: RFValue(20),
    marginRight: RFValue(20),
    marginTop: RFValue(24),
    marginBottom: RFValue(150),
    align: 'center',
    textAlign: 'center'
  },
  baseText: {
    fontStyle: 'Bold',
    fontSize: RFValue(18),
    fontFamily: 'Nunito-Sans',
    align: 'center',
    lineHeight: RFValue(24.55),
    fontWeight: '700',
    textAlign: 'center'
  },

  text: {
    fontStyle: 'Bold',
    fontSize: RFValue(16),
    fontFamily: 'Nunito-Sans',
    lineHeight: RFValue(21.82),
    fontWeight: '600',
  },
  paragraph: {
    fontStyle: 'Bold',
    fontSize: RFValue(12),
    fontFamily: 'Nunito-Sans',
    lineHeight: RFValue(16.37),
    fontWeight: '600',
    textAlign: 'justify'
  },

});


