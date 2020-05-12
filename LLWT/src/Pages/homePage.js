
import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import logo from '../res/main.jpg';



export class homePage extends Component {
    constructor(props) {
        super(props);
    }

    nextScreen = () =>{
      this.props.navigation.navigate('levelsPage');
    }
    nextScreens = () =>{
      this.props.navigation.navigate('infoPage');
    }
    render() {
        return (
          <View  style={styles.container} >
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={logo}
                > 
           
           <View style={styles.butoncon}> 
  
           <View style = {styles.btn} >
           <Button title='Başla' onPress={this.nextScreen} color='#1f4059' />
           </View>

           <View style = {styles.btninf} >
          <Button title='Hakkımızda' onPress={this.nextScreens} color='#1f4059' />
          </View>
            </View>
          
           </ImageBackground> 
      </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#7EB3FF',
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
  },

  text: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  
  btn : {
    width:200,
    marginLeft: 'auto', 
    marginRight: 'auto',
    marginTop : 'auto',
   
   
  },
  btninf : {
    width:200,
    marginLeft: 'auto', 
    marginRight: 'auto',
    marginTop:15
   
   
  },
  butoncon : {
    marginTop:'auto',
    marginBottom:95
   
   
  },

  img : {

    width: '100%', 
    height: '12%', 
    marginTop: 25,
    resizeMode: 'contain'
  }
 
});