import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Levels from './Pages/Levels';
import logo from './res/main.png';




export default function App({navigation}) {
  
  return (
   

 
    <View  style={styles.container} >


    <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={logo}
          > 
         
         <Text style = {styles.text}> Tux ile Linux Öğreniyorum </Text>
         <View style = {styles.btn} >
         <Button title='play'  color='#ec4326'/>
         </View>
         </ImageBackground> 
    </View>

  

  );
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

    textAlign: 'center',
    marginTop: 20,
    color: '#ffff',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',

  },

  btn : {
   
    width:200,
    marginLeft: 80, 
    marginTop : 490,
   


  }
 
});
