import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import { useFonts } from 'expo-font';
import Entrar from './screens/Entrar';
import Cadastrar from './screens/Cadastrar';


const Tab = createMaterialTopTabNavigator();

export default function Tabs() {

    const [fontsLoaded] = useFonts({
        'Nunito-Sans': require('./assets/fonts/NunitoSans-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (


        <Tab.Navigator


            screenOptions={({ route }) => ({


                tabBarActiveTintColor: '#F5816E',
                tabBarInactiveTintColor: 'gray',

                tabBarLabelStyle: {
                    fontSize: RFValue(16),
                    textTransform: 'none',
                    fontWeight: '600',
                    fontFamily: 'Nunito-Sans',
                },

                tabBarIndicatorStyle: { backgroundColor: '#F5816E' }
            })}


        >
            <Tab.Screen name="Entrar" component={Entrar} />
            <Tab.Screen name="Cadastrar" component={Cadastrar} />
        </Tab.Navigator>



    );
}

