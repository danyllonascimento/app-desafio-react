import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import Container from '../components/Container';
import Mobile from '../assets/svg/mobile-inbox.svg';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

export default function Splash2(props) {
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
        <Mobile style={styles.image} />

      </Container>
      <Container>
        <Text style={styles.baseText}>
          Facilidade
        </Text>
      </Container>

      <Text style={styles.paragraphStyle}>
        O
        <Text style={{ fontWeight: '800' }}> Cliente</Text> escolhe o serviço, o profissional e local de sua preferência. Reserva dia, o horário e por quem deseja ser atendido.
      </Text>
      <Text style={styles.paragraphStyle}>
        O
        <Text style={{ fontWeight: '800' }}> Profissional</Text> tem na palma da mão uma agenda inteligente, com métricas dos seus atendimentos e podendo ser controlada quando e onde quiser.
      </Text>

      <Container marginTop={55}>
        <Button
          onPress={() => props.navigation.navigate('Splash1')}

          width={21}
          height={9}
          radius={5}

          color={"#CCCCCC"}


        />
        <Button
          onPress={() => null}
          width={35}
          height={9}
          radius={5}

          color={"#F5816E"}



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

        <LinearGradient style={{borderRadius:5}}
          // Button Linear Gradient
          colors={['#F16974', '#F68F69']}
        >
          <Button
            onPress={() => props.navigation.navigate('Splash3')}
            title={"Próximo"}
            width={335}
            height={46}
            colorFont={"#fff"}


          />
        </LinearGradient>
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
    marginLeft: RFValue(10),
    marginRight: RFValue(10),
    textAlign: 'center',
    justifyContent: 'center',
    lineHeight: RFValue(16),
    align: 'center',

  },
});


