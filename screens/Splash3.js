import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import Container from '../components/Container';
import Wallet from '../assets/svg/e-wallet.svg';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

export default function Splash3(props) {
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
                <Wallet style={styles.image} />

            </Container>
            <Container>
                <Text style={styles.baseText}>
                    Finalize
                </Text>
            </Container>

            <Text style={styles.paragraphStyle}>
                O
                <Text style={{ fontWeight: '800' }}> Cliente</Text> O Cliente pagará de forma rápida e segura com seu cartão de crédito ou pix.
            </Text>

            <Container marginTop={135}>
                <Button
                    onPress={() => props.navigation.navigate('Splash1')}

                    width={21}
                    height={9}
                    color={"#CCCCCC"}
                    radius={5}


                />
                <Button
                    onPress={() => props.navigation.navigate('Splash2')}
                    width={21}
                    height={9}
                    color={"#CCCCCC"}
                    radius={5}




                />
                <Button
                    onPress={() => null}
                    width={35}
                    height={9}
                    color={"#F5816E"}
                    radius={5}

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
                    color={"#CCCCCC"}
                    radius={5}


                />

            </Container>


            <Container marginTop={20}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#F16974', '#F68F69']}
                    style={{borderRadius:5}}>
                    <Button
                        onPress={() => props.navigation.navigate('Splash4')}
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


