
import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import logo from '../res/logo.png';



export class endPage extends Component {
    constructor(props) {
        super(props);
    }

    nextScreen = () =>{
      this.props.navigation.navigate('sectionsPage');
    }

    render() {
        return (
          <View  style={styles.container} >
         
           
           <Text style={styles.texttStyle}>Teşekkürler !</Text>
           <Image source={(logo)} style={styles.imageStyle}></Image>
           <Text style={styles.textStyle}>Tüm videoları izleyip Linux öğrenme yolunda bir adım attığın için sana teşekkür ederiz. Diğer aşamaları edinmeyi unutma !</Text>

  
           <View style = {styles.btn} >
  
           <Button title='Yeniden Başla' onPress={this.nextScreen} color='#1f4059' />
           </View>

          
           
      </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#fcfcfc',
  },
  imageStyle:{
    width:200,
    height:200,
    marginTop:'7%',
    marginLeft:'auto',
    marginRight:'auto'
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  textStyle: {
    fontFamily: 'Ubuntu-L',
    
    marginLeft: '3%',
    marginRight: '3%',
    marginTop:'7%',
    textAlign: 'center',
    fontSize: 20,
    color: '#1f4059'

  },
  texttStyle: {
    fontFamily: 'Ubuntu-RI',
    marginTop: '15%',
  
    textAlign: 'center',
    fontSize: 40,
    color: '#1f4059'

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
    marginBottom: 125
   
  },

  img : {

    width: '100%', 
    height: '12%', 
    marginTop: 25,
    resizeMode: 'contain'
  }
 
});