import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logosmall from "../../components/ui/Logosmall";

const Header = () => {
  return (
    <View styles={styles.root}>
      <Logosmall />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  root:{
    //backgroundColor: 'red',
    flex:1,
    height: 33
  }
})