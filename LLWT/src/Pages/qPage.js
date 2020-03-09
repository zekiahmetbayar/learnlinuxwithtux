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
import Data from '../data/question.json';


export class qPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ques: this.props.route.params.ques,
         
        }
      }
      componentDidMount = () => {
        {
            
          Data.question.map(question => {
            if (question.category == this.props.route.params.ques) {
              
              this.setState({ question: question.question });
              this.setState({ text: question.text });
              this.setState({userAnswer:''});
              this.setState({ answer: question.answer });
              this.setState({con:''})
              this.setState({nextCommand:question.next});
              this.setState({hideview:'200%'});
              
            }
            
          })
        }
      }

handleAnswer = (text) => {
  this.setState({ userAnswer: text })
}

correct= (cevap) => {
    if(this.state.answer==cevap){
      this.setState({hideview:'10%'});
      this.setState({con:'Doğru !'});
      
    }else{
      this.setState({hideview:'200%'});        
      this.setState({con:'Yanlış X '})
    }
}
nextCommand = () => {
  this.props.navigation.navigate('sectionPage',{command:this.state.nextCommand});
}

  render() {
    return (
      <View style={{backgroundColor:'#fcfcfc', flex:1}} >

        <View style={styles.textBoxStyle} >
          <Text style={styles.titleStyle}>{this.state.question}</Text>
          <Text style={styles.textStyle}> {this.state.text}</Text>
          

          <View style={styles.textInputbox}>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText = {this.handleAnswer} value={this.state.usrAnswer}/>
          </View>

          <View style={styles.btnNExt}>
            <Button title='Cevapla ' onPress = {() => this.correct(this.state.userAnswer)} color='#1f4059' />
          </View>

          <Text style={styles.textStyle}> {this.state.con}</Text>

          <View style={{marginTop:this.state.hideview, width:200, marginLeft:'auto',marginRight:'auto'}} >
            <Button title='Sıradaki Komut ' onPress={ () => this.nextCommand() } color='red' />
          </View>
          
        </View>

        

      </View> 
    );
  }
}


const styles = StyleSheet.create({
  lot:{
    width:300,
    height:300, 
  },
  textInputbox:{
    marginTop: 20,
  },
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
    marginTop:20
    


  }


});