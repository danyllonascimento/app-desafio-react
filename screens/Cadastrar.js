import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox, TextInput } from "react-native-paper";
import { RFValue } from 'react-native-responsive-fontsize';
import { useFonts } from 'expo-font';
import Container from '../components/Container';
import Button from '../components/Button';
import { LinearGradient } from 'expo-linear-gradient';
import AppleLogo from '../assets/svg/Apple-logo.svg';
import FacebookLogo from '../assets/svg/Facebook-logo.svg';
import GLogo from '../assets/svg/G+.svg';




const Cadastrar = (props) => {
    const [text, onChangeText] = React.useState('');
    const [number, senha, onChangeNumber] = React.useState('');
    const [password, setPassword] = React.useState("");
    const [isVisble, setIsVisible] = React.useState(true);
    const [checked, setChecked] = React.useState(false);
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
                <Text style={styles.text}>Vamos começar!</Text>
                <Text style={styles.subText}>Por favor, informe seus dados.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.subText}>Nome Completo</Text>
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
                    keyboardType='text'
                    value={text}
                    onChangeText={onChangeText}

                    // Adding hint in TextInput using Placeholder option.
                    placeholder="Digite seu nome completo"
                    // Making the Under line Transparent.
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.subText}>Número do WhatsApp</Text>
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

                justifyContent: "flex-start",
                marginRight: RFValue(15),
                flexDirection: 'row',
                alignItems: 'flex-start',
                display: 'flex',

            }} marginTop={8} marginLeft={20}>
                <Checkbox

                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />

                <Text style={styles.paragraph}>Li e concordo com os <Text 
                 onPress={() => props.navigation.navigate('Termos')}
                
                style={{
                    color: '#F5816E',
                    

                }}>Termos de Serviços.</Text> Os termos estarão disponíveis para consulta dentro do aplicativo. Clientes e Glam poderam entrar em contato via e-mail ou WhatsApp.</Text>


            </View>


            <Container marginTop={10}>

                <LinearGradient style={{ borderRadius: 5 }}
                    // Button Linear Gradient
                    colors={['#F16974', '#F68F69']}
                >
                    <Button
                        title={"Cadastrar"}
                        width={304}
                        height={38}
                        colorFont={"#fff"}


                    />
                </LinearGradient>
            </Container>
            <Container marginTop={10}>
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
            <Container marginTop={10} marginBottom={252} >
                <View style={styles.buttonLogo}>
                    <AppleLogo />
                </View>
                <View style={[styles.buttonLogo, { marginRight: RFValue(30), marginLeft: RFValue(30), }]}>
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

    paragraph: {

        fontSize: RFValue(12),
        marginLeft: RFValue(9.67),
        marginRight: RFValue(40),
        fontFamily: 'Nunito-Sans',
        fontWeight: '600',
        lineHeight: RFValue(16.37),
        textAlign: 'justify',
        marginTop: RFValue(6)

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
export default Cadastrar;