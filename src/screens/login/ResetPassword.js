import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/ui/Button'

const ResetPassword = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.main}>
      <View style={styles.header}>
        <View style={styles.backButtonContiner}>
          <Text>back button</Text>
        </View>
        <View style={styles.logoContainer}>
          <Text>center logo</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text>Title</Text>
        <View style={styles.subtitleContainer}><Text>subtitle</Text></View>
      </View>
      <View>
        <Button />
        <Button />
      </View>
        
      </View>
      <View style={styles.dummy}>

      </View>
    </View>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  main: {
    flex: 2,
    //backgroundColor: 'red'
  },
  dummy: {
    flex: 1,

  }
})