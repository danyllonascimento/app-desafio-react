import React, { useState } from 'react';
import {
    StyleSheet, Text, View, SafeAreaView,
    ScrollView, TouchableOpacity, Image
} from 'react-native';

import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import Container from '../components/Container';
import Divider from '../assets/svg/divider.svg';

export default function Servicos(props) {
    const [fontsLoaded] = useFonts({
        'Nunito-Sans': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
    });


    const [colorCorte, setColor] = useState('#F5816E33');
    const [colorQuimica, setColorQuimica] = useState('white');
    const [colorTextQuimica, setColorTextQuimica] = useState('#313131B2');
    const [colorTextCorte, setColorTextCorte] = useState('#F57E88');
    const [currentView, setCurrentView] = useState(1);



    const handlePress = () => {
        setColor('#F5816E33');
        setColorQuimica('white');
        setColorTextCorte('#F57E88');
        setColorTextQuimica('#313131B2');
        setCurrentView(1);
    }
    const handlePressQuimica = () => {
        setColorQuimica('#F5816E33');
        handlePressTextQuimica();
        handlePressTextCorte();
        setColor('white');
        setCurrentView(2);
    }
    const handlePressTextQuimica = () => {
        setColorTextQuimica('#F57E88');
    }
    const handlePressTextCorte = () => {
        setColorTextCorte('#313131B2');
    }


    if (!fontsLoaded) {
        return null;
    }



    const ViewServicos = () => {

        if (currentView === 1) {

            return (
                <View>
                    <View marginTop={33.5} style={styles.containerServico}>
                        <View>
                            <Text style={styles.textServicos.title}>Corte de cabelo infantil</Text>
                            <Text style={styles.textServicos.subtitle}>A partir de R$ 35,00</Text>
                        </View>
                        <View>

                            <Image style={styles.img} source={require('../assets/png/corteInfantil.png')} />

                        </View>


                    </View>

                    <Container marginTop={12}>
                        <Divider />
                    </Container>

                    <View marginTop={12} marginBottom={349} style={styles.containerServico}>
                        <View>
                            <Text style={styles.textServicos.title} >Corte de cabelo feminino</Text>
                            <Text style={styles.textServicos.subtitle}>A partir de R$ 39,90</Text>
                        </View>
                        <View>
                            <Image style={styles.img} source={require('../assets/png/corteFeminino.png')} />

                        </View>


                    </View>
                </View>
            );
        } else {
            return (

                <View>
                    <View marginTop={22} style={styles.containerServico}>
                        <View>
                            <Text style={styles.textServicos.title}>Progressiva raiz capilar</Text>
                            <Text style={styles.textServicos.subtitle}>A partir de R$ 120,00</Text>
                        </View>
                        <View>

                            <Image style={styles.img} source={require('../assets/png/progressivaraizcapila.png')} />

                        </View>


                    </View>

                    <Container marginTop={12}>
                        <Divider />
                    </Container>

                    <View marginTop={12} style={styles.containerServico}>
                        <View>
                            <Text style={styles.textServicos.title} >Progressiva capilar</Text>
                            <Text style={styles.textServicos.subtitle}>A partir de R$ 150,00</Text>
                        </View>
                        <View>

                            <TouchableOpacity   onPress={() => props.navigation.navigate('ServicosPreview')}>
                                <Image style={styles.img} source={require('../assets/png/progressivacapilar.png')} />
                            </TouchableOpacity>

                        </View>


                    </View>

                    <Container marginTop={12}>
                        <Divider />
                    </Container>

                    <View marginTop={12} style={styles.containerServico}>
                        <View>
                            <Text style={styles.textServicos.title} >Progressiva liso Glam</Text>
                            <Text style={styles.textServicos.subtitle}>A partir de R$ 180,00</Text>
                        </View>
                        <View>
                            <Image style={styles.img} source={require('../assets/png/progressivalisoglam.png')} />

                        </View>


                    </View>

                    <Container marginTop={12}>
                        <Divider />
                    </Container>

                    <View marginTop={12} style={styles.containerServico}>
                        <View>
                            <Text style={styles.textServicos.title} >Selagem capilar sem formol</Text>
                            <Text style={styles.textServicos.subtitle}>A partir de R$ 129,99</Text>
                        </View>
                        <View>
                            <Image style={styles.img} source={require('../assets/png/selagemcapilanformol.png')} />

                        </View>


                    </View>

                    <Container marginTop={12}>
                        <Divider />
                    </Container>

                    <View marginTop={12} style={styles.containerServico}>
                        <View>
                            <Text style={styles.textServicos.title} >Progressiva/selagem masculina</Text>
                            <Text style={styles.textServicos.subtitle}>A partir de R$ 50,00</Text>
                        </View>
                        <View>
                            <Image style={styles.img} source={require('../assets/png/progressivaselagemmasculina.png')} />

                        </View>


                    </View>

                    <Container marginTop={12}>
                        <Divider />
                    </Container>

                    <View marginTop={12} style={styles.containerServico}>
                        <View>
                            <Text style={styles.textServicos.title} >Alinhamento (cachos)</Text>
                            <Text style={styles.textServicos.subtitle}>A partir de R$ 129,99</Text>
                        </View>
                        <View>
                            <Image style={styles.img} source={require('../assets/png/alinhamentocachos.png')} />

                        </View>


                    </View>


                </View>

            );
        }





    }

    return (

        <View style={{ backgroundColor: "white" }}>
            <ScrollView>

                <View marginTop={22} marginLeft={20} >
                    <Text style={styles.text2}>Categorias</Text>
                    <ScrollView horizontal={true} style={styles.container2} marginTop={16}>
                        <View marginRight={10} style={[styles.buttonLogo, { backgroundColor: '#F5816E33' }]} >
                            <Text
                                onPress={() => handlePress()}

                                style={[styles.text2, { color: '#F57E88', }]}>Cabelo</Text>
                        </View>
                        <View marginRight={10} style={styles.buttonLogo} >
                            <Text style={[styles.text2, { color: '#313131B2' }]}>Design</Text>
                        </View>
                        <View marginRight={10} style={styles.buttonLogo} >
                            <Text style={[styles.text2, { color: '#313131B2' }]}>Depila????o</Text>
                        </View>
                        <View marginRight={10} style={styles.buttonLogo} >
                            <Text style={[styles.text2, { color: '#313131B2' }]}>Massagens</Text>
                        </View>
                    </ScrollView>


                </View>

                <Container marginTop={12}>
                    <Divider />
                </Container>
                <View marginTop={1} marginLeft={20} >
                    <Text style={styles.text2}>Servi??os</Text>
                    <ScrollView horizontal={true} style={styles.container2} marginTop={16}>
                        <View marginRight={10} style={[styles.buttonLogo, { backgroundColor: colorCorte }]} >

                            <Text
                                onPress={() => handlePress()}

                                style={[styles.text2, { color: colorTextCorte }]}>Corte</Text>
                        </View>
                        <View marginRight={10} style={styles.buttonLogo} >
                            <Text style={[styles.text2, { color: '#313131B2' }]}>Escova</Text>
                        </View>
                        <View marginRight={10} style={styles.buttonLogo} >
                            <Text style={[styles.text2, { color: '#313131B2' }]}>Penteado</Text>
                        </View>
                        <View marginRight={10} style={[styles.buttonLogo, { backgroundColor: colorQuimica }]} >
                            <Text
                                onPress={() => handlePressQuimica()}
                                style={[styles.text2, { color: colorTextQuimica }]}>Qu??mica</Text>
                        </View>
                    </ScrollView>
                </View>

                <Container marginTop={22}>
                    <Divider />
                </Container>

                <ViewServicos />
            </ScrollView>
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


    paragraph: {
        fontStyle: 'Bold',
        fontSize: RFValue(12),
        fontFamily: 'Nunito-Sans',
        lineHeight: RFValue(16.37),
        fontWeight: '600',
        textAlign: 'justify'
    },

    text: {
        fontSize: RFValue(12),
        fontFamily: 'Nunito-Sans',
        fontWeight: '600',
        marginLeft: RFValue(4),
        marginRight: RFValue(8)
    },
    container2: {
        display: 'flex',
        flexDirection: 'row',


    },

    containerServico: {
        display: 'flex',
        align: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: RFValue(20),
        marginRight: RFValue(20)

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

    textServicos: {

        title: {
            fontSize: RFValue(14),
            fontFamily: 'Nunito-Sans',
            fontWeight: '600',
            lineHeight: RFValue(19.1)
        }, subtitle: {
            fontSize: RFValue(9),
            fontFamily: 'Nunito-Sans',
            fontWeight: '600',
            lineHeight: RFValue(12.28),
            color: '#F5816E'

        }
    },

    img: {
        borderRadius: 2
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
});


