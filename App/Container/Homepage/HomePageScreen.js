import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Images from '../../Library/Images';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Switch } from 'native-base';

export default class HomePageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false,
      switch1: false
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
            <Text style={{ marginLeft: 10, alignSelf: 'center', fontSize: 16, fontWeight: 'bold' }}>Welcome</Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ marginLeft: 10, alignSelf: 'center', fontSize: 16, fontWeight: 'bold' }}>IDR 50.000,-</Text>
          </View>
          <Switch
            value={this.state.switch}
            onValueChange={() => this.setState({ switch: !this.state.switch })}
          />
        </View>
        <View style={{ height: 1, borderBottomColor: '#dadada', borderBottomWidth: 1, elevation: 10 }} />

        <View style={{ paddingVertical: 10 }}>
          <Text style={{ paddingHorizontal: 20, fontWeight: 'bold' }}>Progress</Text>
        </View>
        {/* Slot 1 */}
        <View style={{ paddingVertical: 10, height: 20 }}>
          <Text style={{ paddingHorizontal: 20, alignSelf: 'flex-end', fontWeight: 'bold', top: -10 }}>Slot 1</Text>
        </View>
        <View style={{ backgroundColor: 'white', paddingHorizontal: 25, height: 60, borderBottomColor: '#dadada', borderBottomWidth: 1, elevation: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ marginLeft: 10, alignSelf: 'center', fontSize: 14, fontWeight: 'bold', left: -15 }}>Honda Jazz / D 1514 BFF</Text>
            <Text style={{color: 'grey', marginLeft: 10, alignSelf: 'center', fontSize: 14, fontWeight: 'bold', left:-75 }}>7 min</Text>
            <Text style={{ marginLeft: 10, alignSelf: 'center', fontSize: 14, fontWeight: 'bold', left: -70 }}>Prosess</Text>
          </View>

          <Switch
            value={this.state.switch1}
            onValueChange={() => this.setState({ switch1: !this.state.switch1 })}
          />
        </View>



      </ScrollView>
    );
  }
}
