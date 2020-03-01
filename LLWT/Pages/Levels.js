import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollViewComponent,
  ScrollView,
} from 'react-native';






const DATA = [
  {
    id: '1',
    title: 'pwd',
  },
  {
    id: '2',
    title: 'cd',
  },
  {
    id: '3',
    title: 'mkdir',
  },

  {
    id: '4',
    title: 'ls',
  },
  {
    id: '5',
    title: 'touch',
  },
  {
    id: '6',
    title: 'nano',
  },

  {
    id: '7',
    title: 'gedit',
  },
  {
    id: '8',
    title: 'sh',
  },

  {
    id: '6',
    title: 'nano',
  },

  {
    id: '7',
    title: 'gedit',
  },
  {
    id: '8',
    title: 'sh',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function Levels() {
      return(
      <View style={ styles.bg}>
        <Header />
        
 <ScrollView>
 
            <View style={styles.container}>
              
               
                  <FlatList
                    numColumns={2}
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                  />
                 
                </View>
                 </ScrollView>
            </View>
    );}


const styles = StyleSheet.create({
  container: {
    borderRadius:10,
    padding:50,
    marginTop: 1,
    marginBottom: 50
   
  },
  item: {
    backgroundColor: '#bbb',
    width:125,
    height:125,
    padding:20,
    textAlign: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    marginLeft: 15,
    
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    
  },

  bg : {

    backgroundColor: 'yellow',


  } 



});
