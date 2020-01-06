import React from 'react'

//Library
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { headerStyle, headerTitleStyle, headerRighStyle, headerBgStyle } from '../Styles/AppBarStyle'
import IconBack from 'react-native-vector-icons/Ionicons'

//Screen
import Login from '../Container/Login'
import HomeNavigation from './HomeNavigation'


const MainNavigator = createStackNavigator({
    Login: { screen: Login, navigationOptions: { header: null } },
    HomeNavigation: { screen: HomeNavigation, navigationOptions: { header: null} },
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