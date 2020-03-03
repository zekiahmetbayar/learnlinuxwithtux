
import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import logo from '../res/main.png';
import title from '../res/title.png'


export class homePage extends Component {
    constructor(props) {
        super(props);
    }

    nextScreen = () =>{
      this.props.navigation.navigate('sectionsPage');
    }

    render() {
        return (
          <View  style={styles.container} >
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={logo}
                > 
           
           <Image
           style={styles.img}
           source={title} />
  
           <View style = {styles.btn} >
  
           <Button title='play' onPress={this.nextScreen} color='#ec4326' />
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
    marginBottom: 50
   
  },

  img : {

    width: '100%', 
    height: '12%', 
    marginTop: 25,
    resizeMode: 'contain'
  }
 
});