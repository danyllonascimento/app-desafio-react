import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import Container from '../components/Container';
import Curly from '../assets/svg/curly-hair.svg';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';

export default function Splash1(props) {
  const [fontsLoaded] = useFonts({
    'Nunito-Sans': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (

    <View style={{ backgroundColor: "white" }}>
      <Header />
      <Container>
        <Curly style={styles.image} />

      </Container>
      <Container>
        <Text style={styles.baseText}>
          Bem-vindo ao
          <Text style={styles.innerText}> Glam</Text>
        </Text>
      </Container>

      <Text style={styles.paragraphStyle}>
        Pra você,
        <Text style={{ fontWeight: '800' }}> Cliente</Text>, o Glam é o aplicativo que leva a beleza e bem-estar até você ou, se preferir, você pode ir até um espaço de beleza parceiro Glam com qualidade e comodidade que você merece.
      </Text>
      <Text style={styles.paragraphStyle}>
        Para você,
        <Text style={{ fontWeight: '800' }}> Profissional</Text>
        , o Glam é o aplicativo que irá te ajudar a alavancar seus atendimentos e organizar a sua gestão, podendo você escolher ir até o cliente, recebêlo no seu espaço ou se preferir, as duas opções são possíveis.
      </Text>

      <Container marginTop={20}>
        <Button
          onPress={() => null}
          width={35}
          height={9}
          radius={5}
          color={"#F5816E"}


        />
        <Button
          onPress={() => props.navigation.navigate('Splash2')}
          width={21}
          height={9}
          radius={5}

          color={"#CCCCCC"}


        />
        <Button
          onPress={() => props.navigation.navigate('Splash3')}
          width={21}
          height={9}
          radius={5}

          color={"#CCCCCC"}


        />
        <Button
          onPress={() => props.navigation.navigate('Splash4')}
          width={21}
          height={9}
          radius={5}

          color={"#CCCCCC"}


        />
        <Button
          onPress={() => props.navigation.navigate('Splash5')}
          width={21}
          height={9}
          radius={5}

          color={"#CCCCCC"}


        />

      </Container>


      <Container marginTop={20}>
        <Button
          onPress={() => props.navigation.navigate('Splash2')}
          title={"Começar"}
          width={335}
          height={46}
          colorFont={"#fff"}
          
          color={"#F5816E"}

        />
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


