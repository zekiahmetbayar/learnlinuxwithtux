import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  border,
} from 'react-native';
import stage from '../res/stage.png';
import stages from '../res/stages.png';
import title from '../res/titlestage.png';

export class stagesPage extends Component {
  constructor(props) {
    super(props);
  }

 nextScreen = () =>{
    this.props.navigation.navigate('sectionsPage');
  }


  render() {
    return (

        <View style={styles.bg}>


            <View>
        <Image style={styles.title} source={stages}/>
        <Text style={styles.titlestage}> Aşama 1</Text>
        <TouchableOpacity onPress={ () => this.nextScreen()}>
         
        <Image
           style={styles.stage}
           source={stage} />

        </TouchableOpacity>
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

  stage : {

    width : '100%',
    height : '50%',
    //marginVertical: 'auto',
   // marginTop : 1,
    borderColor: '#bbb',
    borderWidth: 2,    

  },


  title : {

    marginTop: 40,
    width : '100%',
    height:'10%'


  },

  titlestage : {

    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ec4326',
    textAlign: 'center',
  


  },

  bg: {
   backgroundColor: '#eeefef',
   width:'100%',
    height:'100%'
  }

});