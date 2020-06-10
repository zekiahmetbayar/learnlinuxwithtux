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
  AsyncStorage,
  color,
  Text,
} from 'react-native';
import { WebView } from 'react-native-webview';
import HeaderSection from './headerSection';

import Terminal from 'react-native-terminal-component';

export class sectionPage extends Component {



  constructor(props) {
    super(props);
    this.state = {

      link: "dasdsa"
    }
    this.props.navigation.addListener('focus', () => {


      {
      fetch("https://raw.githubusercontent.com/zekiahmetbayar/learnlinuxwithtux/master/LLWT/src/data/data.json")
      .then((res) => res.json())
      .then((json) => {
        json.commands.map(commands => {
          if (commands.name == this.props.route.params.command) {
            this.setState({ title: commands.name })
            this.setState({ tt: commands.title });
            this.setState({ link: commands.link });
            this.setState({ text: commands.text });
          }
        })
      })
      }
    });

  }

  componentDidMount = () => {
    {
      fetch("https://raw.githubusercontent.com/zekiahmetbayar/learnlinuxwithtux/master/LLWT/src/data/data.json")
      .then((res) => res.json())
      .then((json) => {
      json.commands.map(commands => {
        if (commands.name == this.props.route.params.command) {
          this.setState({ title: commands.name })
          this.setState({ tt: commands.title });
          this.setState({ link: commands.link });
          this.setState({ text: commands.text });
        }
      })
    })

    }
  }

  nextScreen = () => {

    this.props.navigation.navigate('qPage', { ques: this.state.title });
  }

  render() {

    return (

      <View style={{ backgroundColor: '#fcfcfc' }} >

        <View style={styles.videoStyle} >

          <WebView
            source={{ uri: this.state.link }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        </View>


        <View style={styles.textBoxStyle} >


          <Text style={styles.titleStyle}>{this.state.tt}</Text>
          <Text style={styles.textStyle}>{this.state.text}</Text>
          <WebView
          
       source={{uri:'https://rohanchandra.gitlab.io/javascript-terminal/demo/'}}>
       </WebView>
          <View style={styles.btnNExt}>
            <Button title='Soruya Geç ' onPress={() => this.nextScreen()} color='#1f4059' />

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
    fontFamily: 'Ubuntu-R',
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 25,
    color: '#1f4059'

  },

  textStyle: {
    marginHorizontal: '2%',
    fontFamily: 'Ubuntu-L',
    marginTop: '5%',
    textAlign: 'left',
    fontSize: 16,
    color: '#1f4059'

  },

  btnNExt: {



    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    marginBottom: 30




  }


});
