import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from './screens/Inicio';
import Termos from './screens/Termos';
import HomeIcon from './assets/svg/HomeIcon.svg';
import ListIcon from './assets/svg/ListIcon.svg';
import UserIcon from './assets/svg/UserIcon.svg';
import SearchIcon from './assets/svg/SearchIcon.svg';
import { useFonts } from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import { List } from 'react-native-paper';


const Tab = createBottomTabNavigator();

export default function BottomNav() {

    const [fontsLoaded] = useFonts({
        'Nunito-Sans': require('./assets/fonts/NunitoSans-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }


    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                headerTintColor: '#F57E88',
                headerTitleStyle: { fontWeight: 'bold' },
                tabBarActiveTintColor: '#F57E88',
                tabBarInactiveTintColor: '#F57E88'

            })}
        >

            <Tab.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    tabBarIcon: () => (
                        <HomeIcon />
                    ),
                    tabBarLabelStyle: {
                        fontSize: RFValue(12),
                        textTransform: 'none',
                        fontWeight: '600',
                        fontFamily: 'Nunito-Sans',
                    }
                }}
            />
            <Tab.Screen
                name="Buscar"
                component={Termos}
                options={{
                    tabBarIcon: () => (
                        <SearchIcon />
                    ),
                    tabBarLabelStyle: {
                        fontSize: RFValue(12),
                        textTransform: 'none',
                        fontWeight: '600',
                        fontFamily: 'Nunito-Sans',
                    }
                }}
            />
            <Tab.Screen
                name="Agenda"
                component={Inicio}
                options={{
                    tabBarIcon: () => (
                        <ListIcon />
                    ),
                    tabBarLabelStyle: {
                        fontSize: RFValue(12),
                        textTransform: 'none',
                        fontWeight: '600',
                        fontFamily: 'Nunito-Sans',
                    }
                }}

            />
            <Tab.Screen
                name="Perfil"
                component={Inicio}
                options={{
                    tabBarIcon: () => (
                        <UserIcon />
                    ),
                    tabBarLabelStyle: {
                        fontSize: RFValue(12),
                        textTransform: 'none',
                        fontWeight: '600',
                        fontFamily: 'Nunito-Sans',
                    }
                }}
            />
        </Tab.Navigator>
    );
}