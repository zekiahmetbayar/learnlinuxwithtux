import React, { useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import headertxt from '../res/headertxt.png'

export default function headerSection(){
    return(
        <View style={styles.header}>

<Image
           style={styles.img}
           source={headertxt} />

        </View>

    )
}

const styles = StyleSheet.create({

header: {

    height:80,
    paddingTop: 25,
    backgroundColor: '#000',

},

title: {

    textAlign: 'center',
    color: '#ffff',
    fontSize: 25,
    fontWeight: 'bold',

},

img : {

    width: '100%', 
    height: '100%', 
  
    marginBottom : 10,
    resizeMode: 'contain'
  }

});