import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import Button from '../../components/ui/Button'
import { useFonts } from 'expo-font'
import * as SplashScreen from "expo-splash-screen";
import { Auth } from 'aws-amplify';


const HomeScreen = () => {

  function logOut() {
    Auth.signOut()
  }

  const [fontsLoaded] = useFonts({
    "satoshi-bold": require("../../../assets/fonts/satoshi/Satoshi-Bold.otf"),
    "satoshi-regular": require("../../../assets/fonts/satoshi/Satoshi-Regular.otf"),
    "satoshi-medium": require("../../../assets/fonts/satoshi/Satoshi-Medium.otf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>HomeScreen</Text>
      <Button onPress={logOut} >Log out</Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})