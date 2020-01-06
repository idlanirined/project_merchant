import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Images from '../../Library/Images';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Switch } from 'native-base';

export default class HomePageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false
    };
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Header */}
        <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
          <View style={{ height: '80%', width: '24%' }}>
            <Image source={Images.rwash} style={{ marginLeft: 20, marginTop: 5, justifyContent: 'center', resizeMode: 'contain', height: '85%', width: '85%' }} />
          </View>
        </View>

        <View style={{ paddingHorizontal: 25, height: 50, borderBottomColor: '#dadada', borderBottomWidth: 1, elevation: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome5 name='user-circle' size={28} style={{ alignSelf: 'center' }} />
            <Text style={{ marginLeft: 10, alignSelf: 'center', fontSize: 16 }}>Welcome</Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ marginLeft: 10, alignSelf: 'center', fontSize: 16 }}>IDR 50.000,-</Text>
          </View>
          <Switch
            value={this.state.switch}
            onValueChange={() => this.setState({ switch: !this.state.switch })}
          />
        </View>
        <View style={{ height: 1, borderBottomColor: '#dadada', borderBottomWidth: 1, elevation: 10 }} />

        <View style={{ paddingVertical: 10}}>
          <Text style={{paddingHorizontal: 20, }}>Progress</Text> 
        </View>
      </ScrollView>
    );
  }
}
