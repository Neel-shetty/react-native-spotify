import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import SongPreviewList from "../../components/SongPreview";
import CategoryBar from "../../components/CategoryBar";
import NewAlbum from "../../components/NewAlbum/NewAlbum";
import Playlist from "../../components/Playlist/Playlist";
import Header from "../../components/Header/Header";

const MusicPlayer = () => {
  return (
    <ScrollView>
      <Text style={{fontSize:50}}>MusicPlayer</Text>
      <Header />
      <Text style={{fontSize:50}}>MusicPlayer</Text>
        <CategoryBar />
      <Text style={{fontSize:50}}>MusicPlayer</Text>
      <SongPreviewList />
      <Text style={{fontSize:50}}>MusicPlayer</Text>
        <NewAlbum />
      <Text style={{fontSize:50}}>MusicPlayer</Text>
        <Playlist />
      <Text style={{fontSize:50}}>MusicPlayer</Text>
      <Text style={{fontSize:50}}>MusicPlayer</Text>
      <Text style={{fontSize:50}}>MusicPlayer</Text>
      <Text style={{fontSize:50}}>MusicPlayer</Text>
      <Text style={{fontSize:50}}>MusicPlayer</Text>
      <Text style={{fontSize:50}}>MusicPlayer</Text>
      <Text style={{fontSize:50}}>MusicPlayer</Text>
      <Text style={{fontSize:50}}>MusicPlayer</Text>
      <Text style={{fontSize:50}}>MusicPlayer</Text>
      <Text style={{fontSize:50}}>MusicPlayer</Text>
      <Text style={{fontSize:50}}>MusicPlayer</Text>
      <Text style={{fontSize:50}}>MusicPlayer</Text>

    </ScrollView>
  )
}

export default MusicPlayer

const styles = StyleSheet.create({})