import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, PermissionsAndroid } from 'react-native';
import { Content, Left, Right, ListItem, List, } from 'native-base';
import Fonts from '../Themes/Fonts';
import Images from '../Library/Images';
import Entypo from 'react-native-vector-icons/Entypo'


class Topupp extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#edeff0' }}>
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                    <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center' }} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Wallet')} style={{ width: '5%', alignSelf: 'center', justifyContent: 'center' }}>
                            <Entypo name='chevron-thin-left' size={30} color='white' />
                        </TouchableOpacity>
                        <View style={{ width: '95%', justifyContent: 'center' }}>
                            <Text style={{ alignSelf: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>Top Up</Text>
                        </View>
                    </View>
                </View>
                    <View style={{ height: '100%', paddingTop: 20, backgroundColor: 'white', borderRadius: 5, flexDirection: 'row' }}>
            <Content>
                <Image source={Images.banktransfer} style={{height:50, width: 50, marginLeft:10}}></Image>
              <Text style={{fontFamily: Fonts.type.regular, fontSize: 24, paddingLeft:45, alignSelf:'center', top:-40, left:-70}}>Bank Transfer</Text>
        
          <TouchableOpacity style={{flexDirection:'row', alignContent:'space-between', backgroundColor:'white', borderBottomColor:'#eaeaea', borderBottomWidth:1, borderBottomLeftRadius:20, height:60}}>
            <Left style={{marginTop:-25}}>
            <Image source={Images.bankbca} style={{height:50, width: 50, top:20, left:10}}></Image>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 18, paddingLeft:10, alignSelf:'center', top:-13}}>BCA</Text>
            </Left>
            <Right>
              <Image source={Images.backhitam} style={{width:20, height:20, left:-20}}></Image>
            </Right>
            </TouchableOpacity>
                
            <TouchableOpacity style={{flexDirection:'row', alignContent:'space-between', backgroundColor:'white', borderBottomColor:'#eaeaea', borderBottomWidth:1, borderBottomLeftRadius:20, height:60, paddingBottom:15}}>
            <Left style={{marginTop:-5}}>
            <Image source={Images.bankbri} style={{height:50, width: 50, top:20, left:10}}></Image>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 18, paddingLeft:5, alignSelf:'center', top:-13}}>BRI</Text>
            </Left>
            <Right>
              <Image source={Images.backhitam} style={{width:20, height:20, left:-20, top:10}}></Image>
            </Right>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row', alignContent:'space-between', backgroundColor:'white', borderBottomColor:'#eaeaea', borderBottomWidth:1, borderBottomLeftRadius:20, height:60, paddingBottom:15}}>
            <Left style={{marginTop:-5}}>
            <Image source={Images.bankbni} style={{height:50, width: 50, top:20, left:10}}></Image>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 18, paddingLeft:10, alignSelf:'center', top:-13}}>BNI</Text>
            </Left>
            <Right>
              <Image source={Images.backhitam} style={{width:20, height:20, left:-20, top:10}}></Image>
            </Right>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row', alignContent:'space-between', backgroundColor:'white', borderBottomColor:'#eaeaea', borderBottomWidth:1, borderBottomLeftRadius:20, height:60, paddingBottom:15}}>
            <Left style={{marginTop:-5}}>
            <Image source={Images.bankmandiri} style={{height:50, width: 50, top:20, left:10}}></Image>
              <Text style={{fontFamily: Fonts.type.light, fontSize: 18, paddingLeft:35, alignSelf:'center', top:-13}}>Mandiri</Text>
            </Left>
            <Right>
              <Image source={Images.backhitam} style={{width:20, height:20, left:-20, top:10}}></Image>
            </Right>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row', alignContent:'space-between', backgroundColor:'white', borderBottomColor:'#eaeaea', borderBottomWidth:1, borderBottomLeftRadius:20, height:60, paddingBottom:15}}>
            <Left style={{marginTop:-5}}>
            <Image source={Images.bankcimb} style={{height:50, width: 50, top:20, left:10}}></Image>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 18, paddingLeft:63, alignSelf:'center', top:-13}}>CIMB Niaga</Text>
            </Left>
            <Right>
              <Image source={Images.backhitam} style={{width:20, height:20, left:-20, top:10}}></Image>
            </Right>
            </TouchableOpacity>
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



export default Topupp;