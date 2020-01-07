import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, Picker, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Images from '../Library/Images';
import Fonts from '../Themes/Fonts';

class RegisterScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            username: '',
            email:'',
            password: '',
            confPassword: '',
            price: [
                'Price',
                'Small',
                'Medium',
                'Large'
            ],
            Vehiclebrand: '',
            Slot: '',
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={{ width: 200, height: 100, justifyContent: 'center', alignSelf: 'center'}}>
                    <Image source={Images.register} style={{ width: 180, height: 180, justifyContent: 'center', alignSelf: 'center'}} resizeMode='contain'/>
                </View>
                
                {/* USERNAME */}
                <View style={styles.inputContainer}>
                    {/* <Image style={styles.inputIcon} source={Images.iconEmail}/> */}
                    <TextInput style={styles.inputs}
                        placeholder="Username" 
                        underlineColorAndroid='transparent'
                        onChangeText={(username) => this.setState({username})}
                    />
                </View>

                {/* NAME MERCHANT */}
                <View style={styles.inputContainer}>
                    {/* <Image style={styles.inputIcon} source={Images.iconEmail}/> */}
                    <TextInput style={styles.inputs}
                        placeholder="Merchant Name " 
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({email})}
                    />
                </View>
                
                {/* ADDRESS MERCHANT */}
                <View style={styles.inputContainer}>
                    {/* <Image style={styles.inputIcon} source={Images.iconEmail}/> */}
                    <TextInput style={styles.inputs}
                        placeholder="Address Merchant" 
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({email})}
                    />
                </View>

                
                {/* EMAIL */}
                <View style={styles.inputContainer}>
                    {/* <Image style={styles.inputIcon} source={Images.password}/> */}
                    <TextInput style={styles.inputs}
                        placeholder="Email" 
                        underlineColorAndroid='transparent'
                        onChangeText={(Vehiclebrand) => this.setState({Vehiclebrand})}
                    />
                </View>

                {/* Password */}
                <View style={styles.inputContainer}>
                    {/* <Image style={styles.inputIcon} source={Images.password}/> */}
                    <TextInput style={styles.inputs}
                        placeholder="Password" 
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({password})}
                    />
                </View>

                 {/* Confirm Password */}
                 <View style={styles.inputContainer}>
                    {/* <Image style={styles.inputIcon} source={Images.password}/> */}
                    <TextInput style={styles.inputs}
                        placeholder="Confirm Password" 
                        underlineColorAndroid='transparent'
                        onChangeText={(confPassword) => this.setState({confPassword})}
                    />
                </View>


                    {/* SLOT */}
                    <View style={styles.inputContainer}>
                    {/* <Image style={styles.inputIcon} source={Images.password}/> */}
                    <TextInput style={styles.inputs}
                        placeholder="Slot" 
                        underlineColorAndroid='transparent'
                        onChangeText={(licenseplate) => this.setState({Slot})}
                    />
                </View>

                  {/* PRICE */}
                <View style={[styles.inputContainer, { paddingHorizontal: 10}]}>
                <Picker
                    selectedValue={this.state.Vehiclebrand}
                    style={{ width: '100%'}}
                    onValueChange={(itemValue) =>
                        // alert(itemValue)
                        this.setState({Vehiclebrand: itemValue})
                    }>
                        {this.state.price.map((item, index) => {
                            return(
                                <Picker.Item label = {item} value={item} />
                            )
                        })}
                </Picker>
                </View>


            

                {/* Button OK */}
                <View style={{ width: 250, paddingHorizontal: 30}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0.9, y: 0.5}} colors={['#00CCFF', '#00CCFF']} style={{ borderRadius: 30, marginVertical: 20, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', height: 50}} onPress={()=> this.props.navigation.navigate('Login')}>
                            <Text style={{color: 'white', fontFamily: Fonts.type.bold, fontSize: 18}}> OK </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
            
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inputContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        elevation: 2,
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        width:300,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
})

export default RegisterScreen;