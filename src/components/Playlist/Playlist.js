import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import PlaylistItem from './PlaylistItem'

const Playlist = () => {
  return (
    <View style={styles.root}>
      <View style={styles.playlistContainer}>
        <Text style={styles.playlist}>Playlist</Text>
      </View>
      <View style={{flex:3}}>
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
      </View>
      {/* 
      <PlaylistItem /> */}
    </View>
  )
}

export default Playlist

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  root:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    //backgroundColor: 'violet',
    width:width,
  },
  playlist: {
    fontSize:20,
    fontFamily: 'satoshi-bold'
  },
  playlistContainer: {
    alignItems: 'flex-start',
    //backgroundColor: 'pink',
    //flex:1,
    width:332,
    paddingLeft: 10,
    paddingVertical:12
  }
})