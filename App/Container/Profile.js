import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, View, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Fonts from '../Themes/Fonts';
import Images from '../Library/Images';
import Entypo from 'react-native-vector-icons/Entypo'





class Profile extends Component {




    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                    <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center' }} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Account')} style={{ width: '5%', alignSelf: 'center', justifyContent: 'center' }}>
                            <Entypo name='chevron-thin-left' size={30} color='white' />
                        </TouchableOpacity>
                        <View style={{ width: '95%', justifyContent: 'center' }}>
                            <Text style={{ alignSelf: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>Profile</Text>
                        </View>
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
    }
});



export default Profile;