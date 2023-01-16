import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Colors, Paragraph, TextInput, Title } from "react-native-paper";
import { RFValue } from 'react-native-responsive-fontsize';
import { useFonts } from 'expo-font';
import Container from '../components/Container';
import Button from '../components/Button';
import { LinearGradient } from 'expo-linear-gradient';
import AppleLogo from '../assets/svg/Apple-logo.svg';
import FacebookLogo from '../assets/svg/Facebook-logo.svg';
import GLogo from '../assets/svg/G+.svg';

const Entrar = (props) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, senha, onChangeNumber] = React.useState('');
    const [password, setPassword] = React.useState("");
    const [isVisble, setIsVisible] = React.useState(true);
    const [fontsLoaded] = useFonts({
        'Nunito-Sans': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    function toggleSecureIcon() {
        setIsVisible(!isVisble);
    }



    return (
        <View style={{ backgroundColor: "white" }}>
            <View style={styles.container}>
                <Text style={styles.text}>Bem vindo de volta!</Text>
                <Text style={styles.subText}>Por favor, faça login na sua conta de registro.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.subText}>Login</Text>
                <TextInput
                    style={{
                        width: RFValue(290),
                        height: RFValue(46),
                        borderColor: '#F5816E',
                        borderWidth: 1,
                        backgroundColor: '#ffff',
                        borderRadius: RFValue(2),
                        fontSize: RFValue(12),
                        fontFamily: 'Nunito-Sans',
                    }}
                    keyboardType='phone-pad'
                    value={number}
                    onChangeText={onChangeNumber}

                    // Adding hint in TextInput using Placeholder option.
                    placeholder="Digite seu WhatsApp"
                    // Making the Under line Transparent.
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.subText}>Senha</Text>
                <TextInput
                    style={{
                        width: RFValue(290),
                        height: RFValue(46),
                        borderColor: '#F5816E',
                        borderWidth: 1,
                        backgroundColor: '#ffff',
                        borderRadius: RFValue(2),
                        fontSize: RFValue(12),
                        fontFamily: 'Nunito-Sans',
                    }}
                    placeholder="Digite sua senha"
                    value={password}
                    secureTextEntry={isVisble}
                    onChangeText={(value) => setPassword(value)}
                    right={
                        <TextInput.Icon
                            style={{ marginTop: 8, backgroundColor: '#ffff' }}
                            onPress={toggleSecureIcon}
                            icon={isVisble ? "eye-off" : "eye"}
                        />
                    }
                />
            </View>
            <View style={{

                justifyContent: "center",
                alignItems: "flex-end",
                marginRight: RFValue(15)

            }} marginTop={8}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('RecuperarSenha')}
                >
                    <Text style={styles.buttonText} >Esqueceu sua senha?</Text>
                </TouchableOpacity>

            </View>


            <Container marginTop={24}>

                <LinearGradient style={{ borderRadius: 5 }}
                    // Button Linear Gradient
                    colors={['#F16974', '#F68F69']}
                >
                    <Button
                      onPress={() => props.navigation.navigate('Inicio')}
                        title={"Entrar"}
                        width={304}
                        height={38}
                        colorFont={"#fff"}


                    />
                </LinearGradient>
            </Container>
            <Container marginTop={24}>
                <View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    color: '#F5816E',
                }}>
                    <Text>_______________</Text>
                    <Text style={{
                        marginLeft: RFValue(16),
                        marginRight: RFValue(16),
                        fontSize: RFValue(16),
                        fontFamily: 'Nunito-Sans',

                    }}>ou</Text>
                    <Text>_______________</Text>
                </View>
            </Container>
            <Container  marginTop={24} marginBottom={252} >
                <View style={styles.buttonLogo}>
                    <AppleLogo />
                </View>
                <View style={[styles.buttonLogo, {marginRight: RFValue(30), marginLeft: RFValue(30),}]}>
                    <FacebookLogo />
                </View>
                <View style={styles.buttonLogo}>
                    <GLogo />
                </View>

            </Container>
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
        fontSize: RFValue(18),
        fontFamily: 'Nunito-Sans',
        fontWeight: '700'
    },

    buttonLogo: {
        width: RFValue(50),
        height: RFValue(50),
        borderWidth: 1,
        
        borderRadius: RFValue(50),
        borderColor: '#F5816E',
        justifyContent: 'center',
        alignItems: 'center'
        
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
        fontSize: RFValue(14),
        fontFamily: 'Nunito-Sans',
        fontWeight: '600',
        color: '#313131',
        lineHeight: RFValue(19.1)

    },
    container: {
        marginTop: RFValue(22),
        marginLeft: RFValue(20),
        backgroundColor: '#ffff'

    },
    containerEnd: {
        display: 'flex',
        justifyContent: 'flex-end'


    }


});
export default Entrar;