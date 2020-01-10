
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'

//Screen
import HomePageScreen from '../Container/Homepage/HomePageScreen'
import Images from '../Library/Images'


// import { Colors, Images } from '../Themes'
import { Image, Text } from 'react-native'
import { View } from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Wallet from '../Container/Wallet'
import History from '../Container/History'


export default HomeNavigation = createBottomTabNavigator({
    Home: {
        screen: HomePageScreen,
        navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor, marginBottom:10 }]}>Home</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                    <FontAwesome5 name='home' size={20} color={tintColor}/>  
                </View>),  
        }
    },
    Schedule: {
        screen: HomePageScreen, 
        navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor, marginBottom:10 }]}>Schedule</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                <FontAwesome5 name='calendar' size={20} color={tintColor}/> 
                </View>),  
        }
    },
    Wallet: {
        screen: Wallet, 
        navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor, marginBottom:10 }]}>Wallet</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                <Entypo name='wallet' size={20} color={tintColor}/> 
                </View>),  
        }
    },
    History: {
        screen: History, 
        navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor, marginBottom:10 }]}>History</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                <FontAwesome5 name='history' size={20} color={tintColor}/> 
                </View>),  
        }
    }, 
    Account: {
        screen: HomePageScreen, 
        navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor, marginBottom:10 }]}>Profile</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                <SimpleLineIcons name='user' size={20} color={tintColor}/>   
                </View>),
        }
    },
    
}, { 
        tabBarOptions: {
            inactiveTintColor: '#808080',
            activeTintColor: '#00CCFF',
            style: {
                backgroundColor: '#FAFAFA',
                height: 60,
            },
            labelStyle: {
                color: 'black'
            }
        },
    })

const styles = {
    label: {
        textAlign: 'center', fontSize: 10
    }
}
