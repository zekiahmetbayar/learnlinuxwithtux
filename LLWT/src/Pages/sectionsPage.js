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
  Alert,
  Image
} from 'react-native';
import box from '../res/box.png';
import sectionsBg from '../res/sectionsBg.jpg';
import Header from './header';
import AsyncStorage from '@react-native-community/async-storage';


const DATA = [
  {
    id: '1',
    title: 'pwd',
  },
  {
    id: '2',
    title: 'ls',
  },
  {
    id: '3',
    title: 'cd',
  },

  {
    id: '4',
    title: 'man',
  },
  {
    id: '5',
    title: 'mkdir',
  },
  {
    id: '6',
    title: 'nano',
  },

  {
    id: '7',
    title: 'cat',
  },
  {
    id: '8',
    title: 'mv',
  },

  {
    id: '9',
    title: 'rm',
  },
  {
    id: '10',
    title: 'touch',
  }



];




export class sectionsPage extends Component {
  constructor(props) {
    super(props);
  }

 
  storeData = async ({item}) => {
    console.log(item.title)
    try {
      var value = await AsyncStorage.getItem(item.title);
      if (value == null) {
      if(item.id!=1)
        {await AsyncStorage.setItem(item.title,'false');}
        else
        {await AsyncStorage.setItem(item.title,'true');}
      }
    } catch (e) {
        // saving error
    }
}

  readStore = async ({item}) => {
    try {
      var value = await AsyncStorage.getItem(item.title);
      if (value !== null) {
        // We have data!!
        console.log(value);
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
    
  }


  Item = ({ item }) => {
   this.storeData({item});
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
  
  this.readStore({item}).then((res) =>{
  console.log(res)
    if(res=='true'){
    this.props.navigation.navigate('sectionPage',{command:item.title});}
    else{
      Alert.alert(
        "Dikkat Tux",
        "Yeni komuta erişebilmeniz için önceki komutun konusunu ve sorusunu bitirmelisiniz.",
        [
          
          { text: "Tamam", onPress: () => console.log("Tamam") }
        ],
        { cancelable: false }
      );
    }});
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