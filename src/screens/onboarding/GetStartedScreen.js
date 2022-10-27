import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
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

const GetStartedScreen = () => {
  const [fontsLoaded] = useFonts({
    "satoshi-bold": require("../../../assets/fonts/satoshi/Satoshi-Bold.otf"),
    "satoshi-regular": require("../../../assets/fonts/satoshi/Satoshi-Regular.otf"),
  });

  const navigation = useNavigation()

  function NextScreen() {
    navigation.navigate('RegisterOrSignIn')
  }


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
    <>
    <StatusBar style="light" />
    <View onLayout={onLayoutRootView} style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/getStartedBG.png")}
        />
      </View>
      <View style={styles.logoContainer}>
        <Logo width='196' height='59' scale='2'/>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>Enjoy Listening To Music?</Text>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>
              Lorem ipsum dolor sit amet. A delectus animi id accusamus illo et
              veniam omnis. Est quae dolorem et pariatur debitis est voluptas
              sint sed Quis magni nam veniam tempora et consequuntur debitis a
              expedita consequatur. Non odio galisum sed inventore quasi ea modi
              ipsam aut debitis deleniti est dolorem cumque aut unde voluptas ad
              eaque provident!
            </Text>
            <View>
              <Button onPress={NextScreen}>Get Started</Button>
            </View>
          </View>
        </View>
      </View>
    </View>
    </>
  );
};

export default GetStartedScreen;

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
    height: 110,
    width: 350,
    bottom: 260,
  },
  subtitle: {
    color: "#797979",
    fontFamily: "satoshi-regular",
    fontSize: 25,
    textAlign: "center",
  },
});
