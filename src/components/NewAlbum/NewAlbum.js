import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const NewAlbum = () => {
  return (
    // <View style={{ flex: 1 , alignItems: 'center', justifyContent:'center'}}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View style={{flex:1}}>
            <Text style={styles.title}>NewAlbum</Text>
          </View>
          <View style={{flex:4}}>
            <Text style={styles.song}>Happier Than Ever</Text>
          </View>
          <View style={{flex:1.1}}>
            <Text style={styles.artist}>Billie Eilish</Text>
          </View>
        </View> 
        <View style={styles.imagecontainer}>
          <Image style={styles.image} source={require('../../../assets/images/billieAlbum.png')}/>
        </View>
      </View>
    // </View>
  );
};

export default NewAlbum;

const styles = StyleSheet.create({
  container: {
    width: 334,
    height: 118,
    backgroundColor: '#42C83C',
    flexDirection: 'row',
    borderRadius: 30
  },
  image: {
    height: 183.61,
    width: 325,
    //backgroundColor: 'pink',
    bottom: 32.1,
    right: 75
  },
  imagecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.5,
    //backgroundColor: 'pink',
  },
  textContainer: {
    flex:1,
    //backgroundColor: 'pink',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft:20,
    paddingVertical: 20
  },
  title: {
    fontSize:10,
    color: 'white',
    fontFamily: 'satoshi-medium'
  },
  song:{
    fontSize:19,
    color: 'white',
    fontFamily: 'satoshi-bold'
  },
  artist:{
    fontSize:13,
    color: 'white',
    fontFamily: 'satoshi-medium',
    
  }
});
