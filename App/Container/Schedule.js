import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity,  ScrollView } from 'react-native'
import { Table, TableWrapper, Row, Rows,  Cell  } from 'react-native-table-component';
import Entypo from 'react-native-vector-icons/Entypo'
import { Fonts } from '../Themes'
import Modal from 'react-native-modal'
import Ionicons from 'react-native-vector-icons/Ionicons'
 
export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['No', 'Car', 'Time', 'Slot', 'Status'],
      tableData: [
        [ '1', 'Honda Jazz', '7 min', 'Slot 1', 1],
      
       
      ]
    }
  }
 
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity style={{justifyContent: 'space-between'}} onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Prosess</Text>
          
        </View>
     
      </TouchableOpacity>
    );
    return (
      <View style={{ flex: 1, backgroundColor: '#edeff0' }}>
           <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                    <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center' }} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ width: '5%', alignSelf: 'center', justifyContent: 'center' }}>
                            <Entypo name='chevron-thin-left' size={30} color='white' />
                        </TouchableOpacity>
                        <View style={{ width: '95%', justifyContent: 'center' }}>
                            <Text style={{ alignSelf: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>Schedule</Text>
                        </View>
                    </View>
                </View>
 
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text} />
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6, fontSize: 12, textAlign: 'center' },
  row: { flexDirection: 'row', backgroundColor: 'white', elevation: 1 },
  btn: { width: 58, height: 25, backgroundColor: '#78B7BB',  borderRadius: 2, justifyContent: 'space-between' },
  btnText: { textAlign: 'center', color: '#fff' },
  
});
