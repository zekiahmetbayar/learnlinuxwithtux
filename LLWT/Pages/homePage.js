import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
} from 'react-native';
import levels from './Pages/Levels';



export default function App() {
  return (
    <View  style={styles.container} >

    <Text style = {styles.text} > Tux ile Linux Öğreniyorum </Text>
    <Image
          style={{width: 200, height: 250, marginTop: 100, marginLeft: 80}}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png'}}
          
        />

      <View style={{flex:5}}>

      </View>
      
      <View style={{flex:5, justifyContent:'center', alignItems:'center'}}>
      <View style={{width:100,marginLeft:0, marginBottom:70}}>

      <Button title="PLAY" color= "#A7E541"
         onPress={() => Alert.alert('Bi sn krdsm oyunu yapıp geliyorum')}
        />
      </View>
      </View>
      <Levels />

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
    marginTop: 80,
    color: '#ffff',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',

  }
 
});
