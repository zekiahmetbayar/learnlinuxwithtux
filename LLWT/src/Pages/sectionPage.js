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
import Header from './header';



export class sectionPage extends Component {
  constructor(props) {
    super(props);
  }

  nextScreen = () => {
    this.props.navigation.navigate('sectionsPage');
  }

  render() {
    return (

      <View style={{ height: '50%' }}>
        <WebView
          style={styles.WebViewStyle}
          source={{ uri: 'https://www.youtube.com/embed/Ea7InZpMd-c' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      


      <View>
        
      <Text> hello </Text>
          


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

  WebViewStyle: {
    width: '100%',
    height: '50%'
  }


});