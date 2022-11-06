import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as MediaLibrary from 'expo-media-library';
import Button from '../../components/ui/Button';


const ExploreScreen = () => {
  async function getFiles(){
    let files = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio'
    })

    for (let i=0;i<20;i++){
      console.log(files.assets[i].uri)
    }
    
    
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
      <Text>ExploreScreen</Text>
      <Button onPress={getFiles}>get Files</Button>
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({})