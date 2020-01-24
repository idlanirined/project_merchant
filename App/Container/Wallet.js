import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, View, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Fonts from '../Themes/Fonts';
import Images from '../Library/Images';
import Entypo from 'react-native-vector-icons/Entypo'




class Wallet extends Component {




    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#edeff0' }}>
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                    <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center' }} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Account')} style={{ width: '5%', alignSelf: 'center', justifyContent: 'center' }}>
                            <Entypo name='chevron-thin-left' size={30} color='white' />
                        </TouchableOpacity>
                        <View style={{ width: '95%', justifyContent: 'center' }}>
                            <Text style={{ alignSelf: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>Wallet</Text>
                        </View>
                    </View>
                </View>

                {/* R*wash Balance */}
                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 60, borderRadius: 5, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, elevation: 2 }} onPress={() => this.props.navigation.navigate('')}>

                    <Image source={Images.iconBalance} style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium }}>R*Wash Balance</Text>
                    <Text style={{ alignSelf: 'center', marginLeft: 90, fontWeight: 'bold' }}>IDR 50.000,-</Text>


                </TouchableOpacity>
                {/* OVO */}
                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 60, borderRadius: 5, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, elevation: 2 }} onPress={() => this.props.navigation.navigate('TopupOvo')}>

                    <Image source={Images.iconOVO} style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium }}>OVO</Text>
                    <Text style={{ alignSelf: 'center', marginLeft: 165, fontWeight: 'bold' }}>IDR 50.000,-</Text>


                </TouchableOpacity>

                {/* GoPay */}
                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 60, borderRadius: 5, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, elevation: 2 }} onPress={() => this.props.navigation.navigate('')}>

                    <Image source={Images.iconGopay} style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium }}>GoPay</Text>
                    <Text style={{ alignSelf: 'center', marginLeft: 150, fontWeight: 'bold' }}>IDR 50.000,-</Text>

                </TouchableOpacity>


                {/* Top Up */}
                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 60, borderRadius: 5, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, elevation: 2 }} onPress={() => this.props.navigation.navigate('Topup')}>

                    <Image source={Images.iconTopUp} style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium }}>Top Up</Text>
                   

                </TouchableOpacity>

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



export default Wallet;