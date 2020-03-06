import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Image
} from 'react-native';
import box from '../res/box.png';
import sectionsBg from '../res/sectionsBg.jpg';
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
    title: 'man',
  },
  {
    id: '8',
    title: 'cat',
  },

  {
    id: '9',
    title: 'mv',
  },
  {
    id: '10',
    title: 'rm',
  },
  {
    id: '11',
    title: 'locate',
  },



];




export class sectionsPage extends Component {
  constructor(props) {
    super(props);
  }

 


  Item = ({ item }) => {
   
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={ () => this.nextScreen({item}) }  >
          <ImageBackground style={styles.txtBox}
          source={box}
          resizeMode="stretch"
          >
            <Text id="txt" style={styles.tt}>
           {item.title} </Text>
         </ImageBackground>
          
        </TouchableOpacity>
      </View>
    );
  }

 nextScreen = ({item}) =>{
   console.log(item.title);
    this.props.navigation.navigate('sectionPage',{command:item.title});
  }
  render() {
    return (

      <ImageBackground
      style={{width: '100%', height: '103%'}}
      source={sectionsBg}
          > 
      <View>
        <View style={{marginTop:80}} >
         
            <FlatList
              style = {styles.title}
              numColumns={2}
              data={DATA}
              renderItem={this.Item}
              keyExtractor={item => item.id}
            />
     
        </View>
         
      </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({


  tt: {

    textAlign: "center",
    fontSize: 23,
    marginTop:'35%',
    color:'#1f4059'

  },

  item: {

    width: '40%',
    height: 143,
    textAlign: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 30,
    marginTop: 2,
    
  },

  title: {

   
    textAlign: 'center',
    marginTop: 20,

  },

  txtBox: {

    
    width: '100%',
    height: '100%',

  },

  bg: {
   backgroundColor: '#eeefef',
  }

});