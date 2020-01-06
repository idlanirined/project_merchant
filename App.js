import React, { Component } from 'react';
import { StatusBar, View } from 'react-native' 
import DeviceInfo from 'react-native-device-info'

import AppNavigation from './App/Navigation/AppNavigation.js'

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: DeviceInfo.hasNotch() ? 25 : 25}}>
        <StatusBar backgroundColor='black' translucent  barStyle={'light-content'}/>
        <AppNavigation/>
      </View>
    )
  }
}