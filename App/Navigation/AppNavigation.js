import React from 'react'

//Library
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { headerStyle, headerTitleStyle, headerRighStyle, headerBgStyle } from '../Styles/AppBarStyle'
import IconBack from 'react-native-vector-icons/Ionicons'

//Screen
import Login from '../Container/Login'
import HomeNavigation from './HomeNavigation'
import RegisterScreen from '../Container/RegisterScreen'
import Wallet from '../Container/Wallet'
import History from '../Container/History'


const MainNavigator = createStackNavigator({
    Login: { screen: Login, navigationOptions: { headerShown: false } },
    HomeNavigation: { screen: HomeNavigation, navigationOptions: { headerShown: false} },
    RegisterScreen : { screen: RegisterScreen , navigationOptions: { headerShown: false} },
    Wallet : { screen: Wallet , navigationOptions: { headerShown: false} },
    History : { screen: History , navigationOptions: { headerShown: false} },

}, {
    headerMode: 'screen',
    initialRouteName: 'Login', 
    defaultNavigationOptions: {
        headerStyle,
        headerTitleStyle, 
        headerTintColor: 'white',
        headerBackImage: ( 
            <IconBack name='arrow-back' size={30} color={'white'} />
        )
    }
});

export default createAppContainer(MainNavigator);