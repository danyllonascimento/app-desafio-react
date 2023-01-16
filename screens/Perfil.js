import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import Logo from '../assets/svg/(sem fundo) GLAM - LOGO.svg';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import User from '../assets/svg/user.svg';
import User2 from '../assets/svg/user2.svg';



export default function Perfil(props) {
  const [fontsLoaded] = useFonts({
    'Nunito-Sans': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (

    <View style={{ backgroundColor: "white" }}>
      <Container marginTop={RFValue(155)}>
        <Logo width={250} height={134} />

      </Container>
      <Container>
        <Text style={styles.baseText}>
          Cuide-se bem, você merece!
        </Text>
      </Container>



      <Container marginTop={50}>
        <Text style={styles.baseText}>O que você gostaria de se tornar para o GLAM?</Text>

      </Container>



      <Container marginTop={32}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#F16974', '#F68F69']}
          style={{ borderRadius: 5, padding: 5 }}>
          <View style={styles.container}>
            <User style={styles.icon}/>
            <Button
              onPress={() => props.navigation.navigate('Tabs')}
              title={"Cliente"}
              width={260}
              height={56}
              colorFont={"#fff"}

            />
          </View>

        </LinearGradient>


      </Container>




      <Container marginTop={20} marginBottom={258}>
        <View style={styles.container2}>

          <User2 style={styles.icon} />
          <Button
            onPress={() => null}
            title={"Profissional"}
            width={260}
            height={56}
            colorFont={'#F5816E'}


          />
        </View>




      </Container>







    </View>

  );
}


const styles = StyleSheet.create({
  buttonBorder: {
    margin: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: RFValue(320),
    height: RFValue(56),
    flexDirection: 'row',



  },



  icon: {


    marginLeft: RFValue(18),
    
    
  },


  iconSpace: {

  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    color: '#F5816E',





  },
  container2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    color: '#F5816E',
    borderColor: '#F5816E',
    borderRadius: 5,
    borderWidth: 1,
    padding: 4




  },

  image: {
    marginTop: RFValue(155),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: RFValue(250),
    height: RFValue(143)
  },
  baseText: {
    fontStyle: 'Mixed',
    fontSize: RFValue(18),
    fontFamily: 'Nunito-Sans',
    align: 'center',
    lineHeight: RFValue(24.55),
    fontWeight: '700',
    textAlign: 'center'
  },
  text: {
    fontSize: RFValue(16),
    fontFamily: 'Nunito-Sans',
    align: 'center',
    lineHeight: RFValue(21.82),
    color: '#F28F8F',
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


