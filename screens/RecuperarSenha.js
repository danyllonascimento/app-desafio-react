import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import AppleLogo from '../assets/svg/Apple-logo.svg';
import FacebookLogo from '../assets/svg/Facebook-logo.svg';
import GLogo from '../assets/svg/G+.svg';



export default function RecuperarSenha(props) {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    const [fontsLoaded] = useFonts({
        'Nunito-Sans': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (

        <View style={{ backgroundColor: "white" }}>
            <Container marginTop={50}>
                <Text style={styles.baseText}>RECUPERAR SENHA</Text>
            </Container>
            <Container marginTop={42}>
                <Text style={{
                    fontSize: RFValue(16),
                    fontFamily: 'Nunito-Sans',
                    align: 'center',
                    fontWeight: '700',
                    lineHeight: RFValue(21.82),
                }}>
                    Problemas para entrar?
                </Text>
            </Container>
            <Container marginTop={10}>
                <Text style={{
                    fontSize: RFValue(12),
                    fontFamily: 'Nunito-Sans',
                    align: 'center',
                    fontWeight: '600',
                    alignItems: 'center',
                    textAlign: 'center',
                    lineHeight: RFValue(16.37),
                    marginLeft: RFValue(5),
                    marginRight: RFValue(5)
                }}>
                    Insira seu número do WhatsApp ultilizado no cadastro e enviaremos um codigo para você voltar a acessar a sua conta.
                </Text>
            </Container>
            <Container marginTop={36}>

                <TextInput
                    style={{
                        width: RFValue(300),
                        height: RFValue(46),
                        borderColor: '#F5816E',
                        borderWidth: 1,
                        borderRadius: RFValue(2),
                        fontSize: RFValue(12),
                        fontFamily: 'Nunito-Sans',
                        padding: 15
                    }}
                    keyboardType='phone-pad'
                    value={number}
                    onChangeText={onChangeNumber}

                    // Adding hint in TextInput using Placeholder option.
                    placeholder="Número do Whatsapp"
                    // Making the Under line Transparent.
                    underlineColorAndroid="transparent"
                />
            </Container>
            <Container marginTop={24}>

                <LinearGradient
                    // Button Linear Gradient
                    colors={['#F16974', '#F68F69']}
                    style={{ borderRadius: 5, }}>
                    <View style={styles.container}>
                        <Button
                            onPress={() => props.navigation.navigate('Login')}
                            title={"Avançar"}
                            width={310}
                            height={38}
                            colorFont={"#fff"}

                        />
                    </View>

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
            <Container  marginTop={24}>
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
            <Container marginBottom={103} marginTop={200}>
               <Button
              onPress={() => props.navigation.navigate('Entrar')}
               title={'Voltar para o login'}
               colorFont={'#F5816E'}
               />


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
        color: '#F5816E'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        color: '#F5816E',





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


