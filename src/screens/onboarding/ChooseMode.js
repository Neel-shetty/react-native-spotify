import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Logo from "../../components/ui/Logo";
import Logos from "../../../assets/svg/Logo.svg";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {Ionicons} from '@expo/vector-icons'

const ChooseMode = () => {

  const navigation = useNavigation()

  function NextScreen() {
    navigation.navigate('RegisterOrSignIn')
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/choosemode.png")}
        />
      </View>
      <View style={styles.logoContainer}>
        <Logo width='196' height='59' scale='2'/>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>Choose Mode</Text>
          </View>
          <View style={styles.subtitleContainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Ionicons name="moon" size={50} color='white'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={NextScreen}>
              <Ionicons name="sunny" size={50} color='white'/>
            </TouchableOpacity>
          </View>
            <View style={styles.view}>
              <Button onPress={NextScreen} style={styles.button}>Continue</Button>
            </View>
          </View>
        </View>
      </View>
    </View>
    </>
  );
}

export default ChooseMode

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  image: {
    height: height + 30,
    width: "100%",
  },
  imageContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 12,
    alignItems: "baseline",
    justifyContent: "flex-start",
    //backgroundColor: 'red',
    paddingHorizontal: width / 3.5,
  },
  titleContainer: {
    flex: 1,
    //backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    marginHorizontal: 5,
    flexDirection: "column",
    minWidth: width,
    alignSelf: "center",
  },
  title: {
    color: "white",
    fontFamily: "satoshi-bold",
    fontSize: 35,
  },
  subtitleContainer: {
    //backgroundColor: 'white',
    //opacity: 0.5,
    position: "absolute",
    height: 115,
    width: 350,
    bottom: 260,
  },
  subtitle: {
    color: "#797979",
    fontFamily: "satoshi-regular",
    fontSize: 25,
    textAlign: "center",
  },
  view: {
    //backgroundColor: "red",
    flex: 1,
    position: 'absolute',
    top: 170,
    alignSelf: 'center'
  },
  button: {
    width: 329,
    height: 92
  },
  iconContainer: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    top: 50,
    //backgroundColor: "red",
    //flex:1
    
  }
});