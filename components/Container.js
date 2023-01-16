import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


const Container = (props) => {
    return (
        <View style={[styles.container, {marginTop: props.marginTop, marginBottom: props.marginBottom} ]} >
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
       
    },
   
});

export default Container;