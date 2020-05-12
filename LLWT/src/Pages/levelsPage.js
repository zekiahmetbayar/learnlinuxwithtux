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
import levelbox from '../res/levelbox.png';
import locklevelbox from '../res/locklevelbox.png';

import levelsBg from '../res/levelsBg.jpg';
import Header from './header';



export class levelsPage extends Component {
  constructor(props) {
    super(props);
  }

 




 nextScreen = () =>{
   
    this.props.navigation.navigate('sectionsPage');
  }
  render() {
    return (

      <ImageBackground
      style={{width: '100%', height: '103%'}}
      source={levelsBg}
          >
      
      <View style={styles.item}>
        <TouchableOpacity style={styles.txtBox} onPress={ () => this.nextScreen() }  >

          <ImageBackground style={styles.txtBox}
          source={levelbox}
          resizeMode="stretch"
          >
            <Text id="txt" style={styles.tt}>Temel Linux Komutları
            </Text>
         </ImageBackground>
         
        </TouchableOpacity>
        
        <ImageBackground style={styles.txtBox}
          source={locklevelbox}
          resizeMode="stretch"
          >
            <Text id="txt" style={styles.tt}>Aşama 2
            </Text>
         </ImageBackground>

         <ImageBackground style={styles.txtBox}
          source={locklevelbox}
          resizeMode="stretch"
          >
            <Text id="txt" style={styles.tt}>Aşama 3
            </Text>
         </ImageBackground>
      </View>
         
      

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({


  tt: {

    textAlign: "left",
    fontSize: 23,
    marginTop:'8%',
    marginLeft:'7%',
    color:'#1f4059'

  },

  item: {

    width: '90%',
    height:'25%',
    textAlign: 'left',
    marginLeft: '5%',
    marginRight: '5%',
    
    marginTop: '25%',
   
  },

  title: {

   
    textAlign: 'center',
    marginTop: 20,

  },

  txtBox: {
    
    marginBottom:20,
    height:'100%',
    width:'100%'
  
   

  },

  bg: {
   backgroundColor: '#eeefef',
  }

});