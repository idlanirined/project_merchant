import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';
import Entypo from 'react-native-vector-icons/Entypo'
import { Fonts } from '../Themes'
import Modal from 'react-native-modal'
import Ionicons from 'react-native-vector-icons/Ionicons'
 
export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name', 'Car', 'Plate No', 'Date/Time'],
      tableData: [
        ['Hamjah H', 'Honda Jazz', 'D 1514 BFF', 'THU,24 Oct / 17.12.11'],
        ['Hamjah H', 'Honda Jazz', 'D 1514 BFF', 'THU,24 Oct / 17.12.11'],
         ['Hamjah H', 'Honda Jazz', 'D 1514 BFF', 'THU,24 Oct / 17.12.11'],
         ['Hamjah H', 'Honda Jazz', 'D 1514 BFF', 'THU,24 Oct / 17.12.11'],
         ['Hamjah H', 'Honda Jazz', 'D 1514 BFF', 'THU,24 Oct / 17.12.11'],
     
      ],
      modalClear: false
    }
  }
  clearAll() {
    this.setState({
        tableData: [],
        modalClear: false
        
        
      
    })
}
 
  render() {
    const state = this.state;
    return (
 
        <View style={{ flex: 1, backgroundColor: '#edeff0' }}>
             <Modal
                    onBackdropPress={() => this.setState({ modalClear: false })}
                    isVisible={this.state.modalClear}
                >
                    <View style={{ height: 200, width: '100%', backgroundColor: 'white', paddingVertical: 15, paddingHorizontal: 20 }}>
                        <Text style={{ alignSelf: 'center', fontSize: 24 }}>Clear All</Text>
                        <Text style={{ alignSelf: 'center', flexWrap: 'wrap', marginTop: 10 }}>Are you sure you want to Clear All History?</Text>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1, paddingHorizontal: 40, paddingBottom: 30 }}>
                            <TouchableOpacity style={{ height: 40, width: 70, borderRadius: 10, backgroundColor: '#f2f2f2', opacity: 1, alignSelf: 'flex-end' }}  onPress={() => this.clearAll()}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ alignSelf: 'center' }}>Yes</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 40, width: 70, borderRadius: 10, backgroundColor: '#f2f2f2', opacity: 1, alignSelf: 'flex-end' }} onPress={() => this.setState({ modalClear: false })}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ alignSelf: 'center' }}>No</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
  

               <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center' }} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}style={{ width: '5%', alignSelf: 'center', justifyContent: 'center' }}>
                        <Entypo name='chevron-thin-left' size={30} color='white' />
                    </TouchableOpacity>
                    <View style={{ width: '95%', justifyContent: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>History</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.setState({ modalClear: true })} style={{ width: '5%', alignSelf: 'center', justifyContent: 'center', left: -20 }}>
                        <Ionicons name='md-trash' size={28} color='white' />
                    </TouchableOpacity>
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
  head: { height: 40, width: '100%',left: 0, backgroundColor: '#343F4B', elevation: 1 },
  body: { height: 40, width: '100%',left: 0, backgroundColor: 'white', elevation: 1 },
  text: { margin: 6, color: 'white', textAlign: 'center' },
  text2: {color: 'black', textAlign: 'center', fontSize: 12}
});

