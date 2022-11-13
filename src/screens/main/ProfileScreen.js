import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/ui/Button'

const ProfileScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button>Log Out</Button>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})