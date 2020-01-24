import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, PermissionsAndroid } from 'react-native';
import { Content, Left, Right, ListItem, List, } from 'native-base';
import Fonts from '../Themes/Fonts';
import Images from '../Library/Images';
import Entypo from 'react-native-vector-icons/Entypo'


class TopupOvo extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#edeff0' }}>
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                    <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center' }} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Wallet')} style={{ width: '5%', alignSelf: 'center', justifyContent: 'center' }}>
                            <Entypo name='chevron-thin-left' size={30} color='white' />
                        </TouchableOpacity>
                        <View style={{ width: '95%', justifyContent: 'center' }}>
                            <Text style={{ alignSelf: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>Top Up OVO</Text>
                        </View>
                    </View>
                </View>
                    <View style={{ height: '100%', backgroundColor: 'white', borderRadius: 5, flexDirection: 'row' }}>
            <Content>
            <View style={{ backgroundColor: 'white', width: 400, height: 170, paddingVertical: 5,  elevation: 2, alignSelf:'center' }} onPress={() => this.props.navigation.navigate('')}>
                <Image source={Images.bgovo} style={{ width: 400, height: 120, alignSelf: 'center', resizeMode: 'contain' }} />
            <Text style={{ alignSelf: 'center', top:20, fontFamily: Fonts.type.medium, alignSelf:'center' }}>Balance (IDR)</Text>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>IDR 50.000,-</Text>
            </View>
    
        </Content>
                </View>
                </View>
                
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});



export default TopupOvo;