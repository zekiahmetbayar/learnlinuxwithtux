import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>

            <Text style={styles.title}>Levels</Text>

        </View>

    )
}

const styles = StyleSheet.create({

header: {

    height:80,
    paddingTop: 25,
    backgroundColor: 'coral',

},

title: {

    textAlign: 'center',
    color: '#ffff',
    fontSize: 25,
    fontWeight: 'bold',


},

});