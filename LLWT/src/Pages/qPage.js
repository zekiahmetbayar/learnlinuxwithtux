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
  TouchableOpacity,
  
  color,
  Modal,
  Text,
} from 'react-native';
import { WebView } from 'react-native-webview';
import HeaderSection from './headerSection';

import Terminal from 'react-native-terminal-component';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class qPage extends Component {





  constructor(props) {
    super(props);
    this.state = {
      ques: this.props.route.params.ques,

    }
  }
  componentDidMount = () => {
    {
      fetch("https://raw.githubusercontent.com/zekiahmetbayar/learnlinuxwithtux/master/LLWT/src/data/question.json")
      .then((res) => res.json())
      .then((json) => {
        
          json.question.map(question => {
          if (question.category == this.props.route.params.ques) {

            this.setState({ question: question.question });
            this.setState({ id: question.id });
            this.setState({cate:question.category});
            
            this.setState({ text: question.text });
            this.setState({ userAnswer: '' });
            this.setState({ answer: question.answer });
            this.setState({ con: '' })
            this.setState({ nextCommand: question.next });
            this.setState({ hideview: '200%' });
            this.setState({ output: question.output })
            this.setState({ out: '' })
            this.setState({ aniSourceTrue: false });
            this.setState({ aniSourceFalse: false });
            this.setState({ btnTitle: '' });
            this.setState({ modalVisible: false });
            
          }

        })
            })
      
    }
  }

  handleAnswer = (text) => {
    this.setState({ userAnswer: text.trim().toLowerCase() })
  }

  correct = (cevap) => {
    this.setState({ modalVisible: true });
    if (this.state.answer == cevap) {
      this.readStore();
      this.setState({ hideview: '10%' });
      this.setState({ out: this.state.output })
      this.setState({ con: 'Doğru !' });
      this.setState({ aniSourceTrue: true });
      this.setState({ aniSourceFalse: false });
      this.setState({ btnTitle: 'SIRADAKİ KOMUT' })

    } else {
      this.setState({ aniSourceTrue: false });
      this.setState({ aniSourceFalse: true });
      this.setState({ hideview: '200%' });
      this.setState({ con: 'Yanlış X ' })
      this.setState({ btnTitle: 'YENİDEN DENE' })
    }
  }
  nextCommand =  () => {
    
    if(this.state.cate!='touch'){
      this.props.navigation.navigate('sectionPage', { command: this.state.nextCommand });
    }else{
     
      this.setState({ modalVisible: false });
      this.props.navigation.navigate('endPage');
      }
    
  
  }
  readStore = async () => {
    try {
      AsyncStorage.setItem(this.state.nextCommand, "true");
      AsyncStorage.getItem(this.state.nextCommand).then((value) => {
         console.log("Get Value >> ", value);
      })
    } catch (e) {
        // error reading value
    }
  }
  render() {
    return (
      <View style={{ backgroundColor: '#fcfcfc', flex: 1 }} >

        <View style={styles.textBoxStyle} >
          <Text style={styles.titleStyle}>{this.state.question}</Text>
          <Text style={styles.textStyle}> {this.state.text}</Text>


          <View style={styles.textInputbox}>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={this.handleAnswer} value={this.state.usrAnswer} autoCapitalize='none' />
          </View>

          <View style={styles.btnNExt}>
            <Button title='Cevapla ' onPress={() => this.correct(this.state.userAnswer)} color='#1f4059' />
          </View>

          <Text style={styles.textStyle}> {this.state.con}</Text>
          

          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            {this.state.aniSourceTrue &&
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                <LottieView
                  source={require('../res/correctGreen.json')}
                  autoPlay
                  loop
                  style={{
                    height: 200,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 200,
                    zIndex: 100
                  }}></LottieView>
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, backgroundColor: '#F5FCFF88', opacity: 1 }}>
                </View>
                
                <Button title='sıradaki' onPress={() => this.nextCommand()} color='#8ED347' />
                <Text style={styles.titleStyle}> ÇIKTI:</Text>
                <Text style={styles.textciktiStyle}> {this.state.out}</Text>


              </View>
            }


            {!this.state.aniSourceTrue &&
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                <LottieView
                  source={require('../res/incorrectRed.json')}
                  autoPlay
                  loop
                  style={{
                    height: 200,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 200,
                    zIndex: 100
                  }}></LottieView>
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, backgroundColor: '#C3C3C3', opacity: 0.7 }}>
                </View>
               
                <Button title='yeniden dene' onPress={() => this.setState({ modalVisible: false })} color='#DB3E3E' />




              </View>
            }

          </Modal>




        </View>



      </View>
    );
  }
}


const styles = StyleSheet.create({

  lot: {
    width: 300,
    height: 300,
  },
  textInputbox: {
    marginHorizontal: '5%',
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
    fontFamily: 'Ubuntu-R',
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 25,
    color: '#1f4059'

  },

  textStyle: {
    fontFamily: 'Ubuntu-L',
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 17.5,
    color: '#1f4059'

  },
  textciktiStyle: {
    fontFamily: 'Ubuntu-L',
    marginLeft:'2%',
    marginTop: '5%',
    textAlign: 'left',
    fontSize: 17.5,
    color: '#1f4059'

  },

  btnNExt: {


    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20



  }


});