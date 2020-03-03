import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import Header from './header';

const DATA = [
  {
    id: '1',
    title: 'pwd',
  },
  {
    id: '2',
    title: 'cd',
  },
  {
    id: '3',
    title: 'mkdir',
  },

  {
    id: '4',
    title: 'ls',
  },
  {
    id: '5',
    title: 'touch',
  },
  {
    id: '6',
    title: 'nano',
  },

  {
    id: '7',
    title: 'gedit',
  },
  {
    id: '8',
    title: 'sh',
  },

  {
    id: '9',
    title: 'gedit',
  },
  {
    id: '10',
    title: 'sh',
  },


];




export class sectionsPage extends Component {
  constructor(props) {
    super(props);
  }

  nextScreen = () =>{
    this.props.navigation.navigate('sectionPage');
  }


  Item = ({ item }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={this.nextScreen} style={styles.txtBox}>
          <Text style={styles.tt}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (

      
      <View style={styles.bg}>
        <Header />
       
        <View style={styles.container}>
          
            <FlatList
              style = {styles.title}
              numColumns={2}
              data={DATA}
              renderItem={this.Item}
              keyExtractor={item => item.id}
            />
      
        </View> 
          
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {

    borderRadius: 10,
    padding: 1,
    marginBottom: 160,
    marginTop: 20,
   
  },

  tt: {

    textAlign: "center",
    fontSize: 17,

  },

  item: {

    width: '40%',
    height: 125,
    textAlign: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 20,
    marginTop: 2,
  },

  title: {

   
    textAlign: 'center',
    marginTop: 20,

  },

  txtBox: {

    backgroundColor: '#989795',
    width: '100%',
    height: '100%',
    padding: 50,
    borderRadius: 10,

  },

  bg: {
   backgroundColor: '#000',
  }

});