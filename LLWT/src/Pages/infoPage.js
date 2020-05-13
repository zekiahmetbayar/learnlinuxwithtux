
import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  View,
  Text,
  Linking,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import logo from '../res/logo.png';
import github from '../res/github.png';
import website from '../res/website.png';


export class infoPage extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
          <View  style={styles.container} >
         
           
           <Text style={styles.texttStyle}>Uygulama Hakkında</Text>
           <Image source={(logo)} style={styles.imageStyle}></Image>
           <Text style={styles.textStyle}>Uygulamamız hakkında daha fazla bilgi için;</Text>
           <View style={styles.a}>
           <TouchableOpacity
                onPress={
                    ()=>{
                        Linking.openURL("https://github.com/zekiahmetbayar/learnlinuxwithtux");  
                    } 
                }
                >
                <Image source={(github)} style={styles.logoStyle}></Image>
               <Text style={styles.linkText}>Kaynak kodları için GITHUB linki</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.a}>
                <TouchableOpacity
                onPress={
                    ()=>{
                        Linking.openURL("https://kraftyazilim.github.io/");  
                    } 
                }
                ><Image source={(website)} style={styles.logoStyle}></Image>
               
               <Text style={styles.linkText}>Sitemiz</Text>
                </TouchableOpacity>
           
  
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
  logoStyle:{
    width:47,
    height:45,
    marginTop:'7%',
    marginLeft:'5%',
    marginLeft:'auto',
    marginRight:'auto'
    
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  linkText:{
    fontFamily: 'Ubuntu-L',
    textAlign: 'center',
    fontSize: 16,
    color: '#1f4059',
    marginTop:'2%'
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
    fontFamily: 'Ubuntu-L',
    marginTop: '11%',
  
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
