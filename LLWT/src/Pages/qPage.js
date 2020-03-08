import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Image,
  ImageBackground,
  TextInput,
  border,
  borderRadius,
  backgroundColor,
  color,
  Text,
} from 'react-native';
import { WebView } from 'react-native-webview';
import HeaderSection from './headerSection';
import Data from '../data/question.json'


export class qPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ques: this.props.route.params.ques,
         
        }
      }
      componentDidMount = () => {
        {
            console.log(this.state.ques)
          Data.question.map(question => {
            if (question.category == this.state.ques) {
              console.log(question.grade);
              this.setState({ question: question.question });
              this.setState({ text: question.text });
              this.setState({ answer: question.answer });
            }
          })
        }
      }
control=(text) =>{
    if(text==this.state.answer){
        this.props.navigation.navigate('homePage');
    }
}
  render() {
   
    return (

      <View style={{backgroundColor:'#fcfcfc'}} >
         
       


        <View style={styles.textBoxStyle} >


          <Text style={styles.titleStyle}>{this.state.question}</Text>
          <Text style={styles.textStyle}> {this.state.text}</Text>

          <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={() => this.control(text)}
     
    />
       
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