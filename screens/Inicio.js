import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { Card, Colors, List, Paragraph, TextInput, Title } from "react-native-paper";
import { RFValue } from 'react-native-responsive-fontsize';
import { useFonts } from 'expo-font';
import Container from '../components/Container';
import Button from '../components/Button';
import Logo from '../assets/svg/(sem fundo) GLAM - LOGO.svg';
import Heart from '../assets/svg/heart.svg';
import HeartSelect from '../assets/svg/heartSelect.svg';
import Profile1 from '../assets/svg/profile1.svg';
import Profile2 from '../assets/svg/profile2.svg';
import Profile3 from '../assets/svg/profile3.svg';
import LocationLogo from '../assets/svg/locationLogo.svg';
import ButtonDown from '../assets/svg/buttonDown.svg';
import Ellipse28 from '../assets/svg/Ellipse 28.svg';
import Divider from '../assets/svg/divider.svg';
import Card1 from '../assets/svg/Card1.svg';
import Card2 from '../assets/svg/Card2.svg';

const Inicio = (props) => {
    const [fontsLoaded] = useFonts({
        'Nunito-Sans': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }



    return (
        <View style={{ backgroundColor: "white" }}>
            <ScrollView>

                <View style={styles.container} marginTop={59}>
                    <Logo width={55} marginLeft={20} height={32} />
                    <View style={styles.container}>
                        <LocationLogo />
                        <Text style={styles.text}>Crato, CE</Text>
                        <ButtonDown />



                    </View>
                    <Ellipse28 marginRight={20} />

                </View>

                <View marginTop={41} marginLeft={20} >
                    <Text style={styles.textLarge}>Olá, Mariana Silva</Text>
                    <Text style={styles.subText}>Seja bem-vindo(a) ao <Text style={{ color: '#313131' }}>Glam</Text></Text>

                </View>


                <View marginTop={22} marginLeft={20} >
                    <Text style={styles.text2}>Categorias</Text>
                    <ScrollView horizontal={true} style={styles.container2} marginTop={16}>
                        <View marginRight={10} style={styles.buttonLogo} >
                            <Text
                            onPress={() => props.navigation.navigate('Servicos')}
                            
                            style={[styles.text2, { color: '#313131B2' }]}>Cabelo</Text>
                        </View>
                        <View marginRight={10} style={styles.buttonLogo} >
                            <Text style={[styles.text2, { color: '#313131B2' }]}>Design</Text>
                        </View>
                        <View marginRight={10} style={styles.buttonLogo} >
                            <Text style={[styles.text2, { color: '#313131B2' }]}>Depilação</Text>
                        </View>
                        <View marginRight={10} style={styles.buttonLogo} >
                            <Text style={[styles.text2, { color: '#313131B2' }]}>Massagens</Text>
                        </View>
                    </ScrollView>


                </View>

                <Container marginTop={22}>
                    <Divider />
                </Container>

                <View marginTop={22} marginLeft={20} >
                    <Text style={styles.text2}>Serviços Populares</Text>
                    <ScrollView horizontal={true} marginTop={16}>
                        <View >
                            <Card1 />
                            <Text style={styles.text}>Mão ou Pé</Text>
                            <Text style={[styles.text, { color: '#F5816E' }]}>A partir de R$ 30,00</Text>

                        </View>

                        <View >
                            <Card2 />
                            <Text style={styles.text}>Design de sobrancelhas</Text>
                            <Text style={[styles.text, { color: '#F5816E' }]}>A partir de R$ 35,00</Text>

                        </View>

                        <View >
                            <Card1 />
                            <Text style={styles.text}>Escova</Text>
                            <Text style={[styles.text, { color: '#F5816E' }]}>A partir de R$ 35,00</Text>

                        </View>

                    </ScrollView>
                </View>

                <Container marginTop={22}>
                    <Divider />
                </Container>
                <View marginTop={22} marginLeft={20} >
                    <Text style={styles.text2}>Profissionais</Text>
                    <ScrollView>
                        <List.Item
                            title="Luane Silva"
                            description="Cabelo . 0,2 km"
                            descriptionNumberOfLines={12}
                            left={props => <Profile1 />}
                            right={props=> <HeartSelect/>}
                            
                        />
                        <List.Item
                            title="Marlene Souza"
                            description="Cabelo . 0,2 km"
                            descriptionNumberOfLines={12}
                            left={props => <Profile2 />}
                            right={props=> <Heart/>}
                            
                        />
                        <List.Item
                            title="Isadora Barbosa"
                            description="Unhas . 0,2 km"
                            descriptionNumberOfLines={12}
                            left={props => <Profile3 />}
                            right={props=> <Heart/>}
                            
                        />
                       
                    </ScrollView>


                </View>
            </ScrollView>

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
        fontSize: RFValue(12),
        fontFamily: 'Nunito-Sans',
        fontWeight: '600',
        marginLeft: RFValue(4),
        marginRight: RFValue(8)
    },

    text2: {
        fontSize: RFValue(16),
        fontFamily: 'Nunito-Sans',
        fontWeight: '600',
        lineHeight: RFValue(21.82)
    },
    textLarge: {
        fontSize: RFValue(20),
        fontFamily: 'Nunito-Sans',
        fontWeight: '400',
        lineHeight: RFValue(27.28)
    },


    profileText: {
        name: {
            fontSize: RFValue(14),
            fontFamily: 'Nunito-Sans',
            fontWeight: '600',
            lineHeight: RFValue(19.1)
        }, subText: {
            fontSize: RFValue(9),
            fontFamily: 'Nunito-Sans',
            fontWeight: '600',
            lineHeight: RFValue(12.28)
        }



    },

    buttonLogo: {
        width: RFValue(90),
        height: RFValue(26),
        borderWidth: 1,

        borderRadius: RFValue(50),
        borderColor: '#F5816E',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10

    },

    buttonText: {
        fontSize: RFValue(12),
        color: '#F5816E',
        marginRight: RFValue(10),
        fontFamily: 'Nunito-Sans',
        fontWeight: '600',
        lineHeight: RFValue(16.37)

    },

    subText: {
        fontSize: RFValue(16),
        fontFamily: 'Nunito-Sans',
        fontWeight: '600',
        color: '#31313180',
        lineHeight: RFValue(19.1)

    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    container2: {
        display: 'flex',
        flexDirection: 'row',


    },



});
export default Inicio;