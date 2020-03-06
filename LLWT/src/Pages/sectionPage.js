import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Image,
  ImageBackground,
  border,
  borderRadius,
  backgroundColor,
  color,
  Text,
} from 'react-native';
import { WebView } from 'react-native-webview';
import HeaderSection from './headerSection';
import Data from '../data/data.json'


export class sectionPage extends Component {
  
  

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.route.params.command,
      link: "dasdsa"
    }
  }

  componentDidMount = () => {
    {
      Data.commands.map(commands => {
        if (commands.name == this.state.title) {
          console.log(commands.grade);
          this.setState({ tt: commands.title });
          this.setState({ link: commands.link });
          this.setState({ text: commands.text });
        }
      })
    }
  }

  nextScreen = () => {
    this.props.navigation.navigate('sectionsPage');
  }

  render() {
    
    return (

      <View style={{backgroundColor:'#fcfcfc'}} >
          
        <View style={styles.videoStyle} >
        
          <WebView
            source={{ uri: this.state.link }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        </View>


        <View style={styles.textBoxStyle} >


          <Text style={styles.titleStyle}>{this.state.tt}</Text>
          <Text style={styles.textStyle}> {this.state.text}</Text>

          <View style={styles.btnNExt}>

            <Button title='Soruya Geç ' color='#1f4059' />

          </View>

        </View>




      </View>




    );
  }
}


const styles = StyleSheet.create({

  video: {
    marginHorizontal: 'auto',
    width: 200,
    height: 100,
    borderRadius: 10,
  },

  Container: {
    flex: 0
  },


  textBoxStyle: {
    height: '60%',


  },

  videoStyle: {
    width: '100%',
    height: '40%'

  },

  titleStyle: {
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 25,
    color:'#1f4059'

  },

  textStyle: {
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 16,
    color:'#1f4059'

  },

  btnNExt: {


    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 50


  }


});