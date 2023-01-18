import React, { useState } from 'react';
import {
    StyleSheet, Text, View, SafeAreaView,
    ScrollView, TouchableOpacity, Image
} from 'react-native';

import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import Container from '../components/Container';
import Divider from '../assets/svg/divider.svg';

export default function ServicosPreview(props) {
    const [fontsLoaded] = useFonts({
        'Nunito-Sans': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
    });


   


    if (!fontsLoaded) {
        return null;
    }

    return (

        <View style={{ backgroundColor: "white" }}>
          
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


