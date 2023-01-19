import React, { useState, useCallback, useMemo, useRef } from 'react';
import {
    StyleSheet, Text, View, SafeAreaView,
    ScrollView, TouchableOpacity, Image, ImageBackground
} from 'react-native';
import Button from '../components/Button';
import { List } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import Container from '../components/Container';
import Divider from '../assets/svg/divider.svg';
import AlertIcon from '../assets/svg/alertIcon.svg';
import Marlene from '../assets/svg/profile2.svg';
import Juliana from '../assets/svg/juliana.svg';
import Marina from '../assets/svg/marinasilva.svg';
import Tyme from '../assets/svg/tyme.svg';
import Carrinho from '../assets/svg/carrinhoCompras.svg';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';



export default function ServicosPreview(props) {
    const [fontsLoaded] = useFonts({
        'Nunito-Sans': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
    });

    const aceEditorRef = useRef();

    // variables
    const snapPoints = useMemo(() => ['25%', '200%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        aceEditorRef.current?.present();
    }, []);

    const handleClosePress = () => aceEditorRef.current.close()

    if (!fontsLoaded) {
        return null;
    }

    return (

        <View style={{ backgroundColor: "white" }}>


            <ScrollView>

                <View marginLeft={20} marginTop={22}>
                    <Text style={styles.text2}>Progressiva capilar</Text>
                    <View marginTop={4}>
                        <Text style={[styles.textSmall, {
                            color: '#F57E88'
                        }]}>A partir de R$ 150,00</Text>
                    </View>
                    <View style={styles.containerInline} marginTop={4}>
                        <AlertIcon marginRight={9} />
                        <Text style={[styles.textSmall, {
                            color: '#F57E88'
                        }]}>Valor sucetível a mudança conforme o comprimento</Text>
                    </View>

                    <Container marginTop={16} >
                        <Divider marginRight={20} />
                    </Container>

                    <View style={styles.containerBetween} marginRight={30} marginTop={22}>
                        <Text style={styles.text2}>Escolha o tamanho</Text>
                        <Text style={[styles.textSmall, {
                            color: '#753C41'
                        }]}>Guia de tamanho</Text>
                    </View>

                    <View marginTop={22}  >
                        <Text style={styles.text2}>Categorias</Text>
                        <ScrollView horizontal={true} style={styles.container2} marginTop={16}>
                            <View marginRight={10} style={[styles.buttonLogo, { backgroundColor: '#F5816E33' }]} >
                                <Text


                                    style={[styles.text2, { color: '#F57E88', }]}>Curto</Text>
                            </View>
                            <View marginRight={10} style={styles.buttonLogo} >
                                <Text style={[styles.text2, { color: '#313131B2' }]}>Médio</Text>
                            </View>
                            <View marginRight={10} style={styles.buttonLogo} >
                                <Text style={[styles.text2, { color: '#313131B2' }]}>Longo</Text>
                            </View>
                            <View marginRight={10} style={styles.buttonLogo} >
                                <Text style={[styles.text2, { color: '#313131B2' }]}>Extra longo</Text>
                            </View>
                        </ScrollView>


                    </View>

                    <View style={styles.containerInline} marginTop={12}>
                        <AlertIcon marginRight={9} />
                        <Text style={[styles.textSmall, {
                            color: '#F57E88'
                        }]}>Valor sucetível a mudança conforme o comprimento</Text>
                    </View>

                    <Container marginTop={16} >
                        <Divider marginRight={20} />
                    </Container>
                    <View style={styles.containerBetween} marginTop={16}>
                        <Text style={styles.text2}>Profissionais disponíveis</Text>

                    </View>
                </View>

                <View marginLeft={20} marginBottom={45}>

                    <ScrollView>

                        <List.Item
                            title="Marlene Souza"
                            description={"Cabelo . 0,2 km" + "\n" + "55-56min . R$55,00"}
                            descriptionNumberOfLines={12}
                            left={props => <Marlene />}

                            right={
                                props => <Container><Text style={styles.textPrice}>R$ 150,00</Text></Container>
                            }

                        />
                        <Container >
                            <Divider marginRight={20} />
                        </Container>

                        <List.Item
                            title="Jaqueline Silva"
                            description={"Unhas . 0,7 km" + "\n" + "60min-1h30min . Grátis"}
                            descriptionNumberOfLines={12}
                            left={props => <Tyme />}

                            right={
                                props => <Container><Text style={styles.textPrice}>R$ 160,00</Text></Container>
                            }

                        />
                        <Container marginTop={12} marginBottom={12}>
                            <Divider marginRight={20} />
                        </Container>

                        <List.Item
                            title="Juliana Souza"
                            description={"Variados . 0,2 km" + "\n" + "55-56min . Grátis"}
                            descriptionNumberOfLines={12}
                            left={props => <Juliana />}

                            right={
                                props => <Container><Text style={styles.textPrice}>R$ 160,00</Text></Container>
                            }

                        />
                        <Container marginTop={12} marginBottom={12}>
                            <Divider marginRight={20} />
                        </Container>

                        <List.Item
                            title="Marina Silva"
                            description={"Variados . 0,7 km" + "\n" + "60min-1h30min . Grátis"}
                            descriptionNumberOfLines={12}
                            left={props => <Marina />}

                            right={
                                props => <Container><Text style={styles.textPrice}>R$ 160,00</Text></Container>
                            }

                        />

                    </ScrollView>
                    <TouchableOpacity
                        onPress={handlePresentModalPress}
                        activeOpacity={0.7}
                        style={styles.touchableOpacityStyle}>
                        <Carrinho />
                    </TouchableOpacity>

                </View>
            </ScrollView>
            <BottomSheetModalProvider>

                <View style={styles.containerSheet}>
                  
                    <BottomSheetModal
                        ref={aceEditorRef}
                        index={1}
                        snapPoints={snapPoints}


                    >
                        <Image style={styles.image} source={require('../assets/png/progressivacapilarlarge.png')} />

                        <View marginLeft={20} marginRight={12}>

                            <View>
                                <List.Item
                                    title={<Text style={{

                                        fontSize: RFValue(14),
                                        fontFamily: 'Nunito-Sans',
                                        fontWeight: '600',
                                        lineHeight: RFValue(19.1),

                                    }}>Marlene Souza</Text>}

                                    description={<Text style={{

                                        fontSize: RFValue(9),
                                        fontFamily: 'Nunito-Sans',
                                        fontWeight: '600',
                                        lineHeight: RFValue(12.28),
                                        color: '#F57E88'

                                    }}>Ver Perfil</Text>}
                                    descriptionNumberOfLines={12}
                                    left={props => <Marlene />}

                                    right={
                                        props => <Container><Text style={styles.textPrice}>R$ 150,00</Text></Container>
                                    }



                                />
                            </View>

                            <Container>
                                <Divider />
                            </Container>

                            <View >
                                <Text style={styles.text2}>Progressiva Capilar</Text>
                                <View style={styles.containerInline} marginTop={12}>
                                    <AlertIcon marginRight={9} />
                                    <Text style={[styles.textSmall, {
                                        color: '#F57E88'
                                    }]}>Comprimento do cabelo: Curto</Text>
                                </View>
                            </View>
                            <Container>
                                <Divider />
                            </Container>

                            <View marginRight={20}>
                                <Text style={styles.textServicos.title}>Descrição do serviço</Text>
                                <Text style={styles.textSmall}>A progressiva é um tratamento que age na estrutura física dos nossos fios, modificando-a. Dessa forma, ela reduz o volume do frizz, fazendo com que o cabelo fique com a aparência mais lisa, sedosa e brilhante;</Text>
                            </View>
                            <View style={styles.containerInline} marginTop={12}>
                                <AlertIcon marginRight={9} />
                                <Text style={[styles.textSmall, {
                                    color: '#F57E88'
                                }]}>Está incluso corte simples, escova e hidratação</Text>
                            </View>
                            <View style={styles.containerInline} marginTop={4}>
                                <AlertIcon marginRight={9} />
                                <Text style={[styles.textSmall, {
                                    color: '#F57E88'
                                }]}>Duração do serviço: Em média 2h a 3h.</Text>
                            </View>
                            <Container marginTop={24} marginBottom={12}>


                                <Button
                                    onPress={() => null}
                                    title={"Agendar"}
                                    width={335}
                                    height={38}
                                    radius={5}
                                    colorFont={"#fff"}
                                    color={'#F5816E'}


                                />

                            </Container>

                        </View>



                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>
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
        textAlign: 'center',

    },
    containerSheet: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },

    image: {
        width: RFValue(375),
        height: RFValue(140)
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
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
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 5,
        right: 30,
        bottom: 30,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },


    textPrice: {
        fontStyle: 'Bold',
        fontSize: RFValue(12),
        fontFamily: 'Nunito-Sans',
        lineHeight: RFValue(16.37),
        fontWeight: '700',
        color: '#F57E88'

    },

    text: {
        fontSize: RFValue(12),
        fontFamily: 'Nunito-Sans',
        fontWeight: '600',
        marginLeft: RFValue(4),
        marginRight: RFValue(8)
    },
    containerInline: {
        display: 'flex',
        flexDirection: 'row',


    },
    textSmall: {
        fontSize: RFValue(10),
        fontFamily: 'Nunito-Sans',
        fontWeight: '600',
        lineHeight: RFValue(13.64),
        textAlign: 'justify'

    },

    containerBetween: {
        display: 'flex',
        align: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',


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


