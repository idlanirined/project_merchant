import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';
import Entypo from 'react-native-vector-icons/Entypo'
import { Fonts } from '../Themes'
 
export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name', 'Car', 'Plate No', 'Date/Time'],
      tableData: [
        ['Hamjah H', 'Honda Jazz', 'D 1514 BFF', 'THU,24 Oct / 17.12.11'],
        ['a', 'b', 'c', 'd'],
      
        ['a', 'b', 'c', 'd']
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
        <View style={{ flex: 1, backgroundColor: '#edeff0' }}>
               <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center' }} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Account')}style={{ width: '5%', alignSelf: 'center', justifyContent: 'center' }}>
                        <Entypo name='chevron-thin-left' size={30} color='white' />
                    </TouchableOpacity>
                    <View style={{ width: '95%', justifyContent: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>History</Text>
                    </View>
                </View>   
                </View>


      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} style={styles.body} textStyle={styles.text2}/>
        </Table>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', width: '100%' },
  head: { height: 40, width: '100%',left: 0, backgroundColor: '#343F4B' },
  body: { height: 40, width: '100%',left: 0, backgroundColor: 'white' },
  text: { margin: 6, color: 'white', textAlign: 'center' },
  text2: {color: 'black', textAlign: 'center', fontSize: 12}
});

