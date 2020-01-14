import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, View, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Fonts from '../Themes/Fonts';
import Images from '../Library/Images';
import Entypo from 'react-native-vector-icons/Entypo'
import Modal from 'react-native-modal'
import { Avatar } from 'react-native-elements'
import Fontisto from 'react-native-vector-icons/Fontisto'


class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalLogout: false
        }
    }


 


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <Modal
                    onBackdropPress={() => this.setState({ modalLogout: false })}
                    isVisible={this.state.modalLogout}
                >
                    <View style={{ height: 200, width: '100%', backgroundColor: 'white', paddingVertical: 15, paddingHorizontal: 20 }}>
                        <Text style={{ alignSelf: 'center', fontSize: 24 }}>Logout</Text>
                        <Text style={{ alignSelf: 'center', flexWrap: 'wrap', marginTop: 10 }}>Are you sure you want to logout?</Text>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1, paddingHorizontal: 40, paddingBottom: 30 }}>
                            <TouchableOpacity style={{ height: 40, width: 70, borderRadius: 10, backgroundColor: '#f2f2f2', opacity: 1, alignSelf: 'flex-end' }} onPress={() => this.props.navigation.navigate('Login')}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ alignSelf: 'center' }}>Yes</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 40, width: 70, borderRadius: 10, backgroundColor: '#f2f2f2', opacity: 1, alignSelf: 'flex-end' }} onPress={() => this.setState({ modalLogout: false })}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ alignSelf: 'center' }}>No</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View style={{ height: 120, width: '100%', backgroundColor: '#00CCFF' }}>
                </View>
                <View style={{ justifyContent: 'space-between', flex: 1, paddingBottom: 20 }}>
                    <View style={{ paddingHorizontal: 15, marginTop: -80, elevation: 2 }}>
                        <Text style={{ fontFamily: Fonts.type.regular, fontSize: 20, alignSelf: 'center', color: 'white' }}>Account</Text>

                        {/* Account */}
                        <View style={{ backgroundColor: 'white', width: '100%', height: 140, borderRadius: 5, marginTop: 5, paddingVertical: 5, elevation:2 }}>
                            <Avatar rounded source={Images.avatar} containerStyle={{ alignSelf: 'center' }} size='large' />
                            <Text style={{ fontFamily: Fonts.type.bold, marginTop: 10, alignSelf: 'center', fontSize: 16 }}>R*Wash Dipatiukur</Text>
                            <Text style={{ fontFamily: Fonts.type.light, alignSelf: 'center', fontSize: 12, color: '#808080' }}>Jl Dipatiukur No.5 Bandung</Text>
                       
                        </View>

                        {/* Profile */}
                        <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 60, borderRadius: 5, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, elevation:2 }} onPress={() => this.props.navigation.navigate('Profile')}>

                            <Image source={Images.iconAccount} style={{ width: 25, height: 25, resizeMode: 'contain', alignSelf: 'center' }} />
                            <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium }} onPress={() => this.props.navigation.navigate('Profile')}>Profile</Text>

                        </TouchableOpacity>

                        {/* Payment */}
                     
                    </View>

               

                    <View style={{ paddingHorizontal: 20, }}>
                        {/* Logout */}
                        <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 60, borderRadius: 5, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, elevation:2 }} onPress={() => this.setState({ modalLogout: true })}>
                            <Fontisto name='power' size={20} style={{ alignSelf: 'center' }} color={'gray'} />
                            <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium }}>Logout</Text>
                        </TouchableOpacity>

                    </View>
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
        elevation: 3,
    }
});
export default Account;