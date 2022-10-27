import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Logo from "../../components/ui/Logo";
import Logobig from "../../components/ui/Logobig";
import Button from "../../components/ui/Button";

const RegisterOrSignIn = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.logoContainer}>
        <Logobig />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Enjoy Listening to Music</Text>
        <Text style={styles.subtitle}>
          Spotify is a proprietary Swedish audio streaming and media services
          provider
        </Text>
      </View>
      <View>
        <View>
          <Image
            source={require("../../../assets/images/billieLogin.png")}
            style={styles.image}
          />
          <Image source={require("../../../assets/images/Unionlines.png")} />
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} textStyle={styles.buttonTextStyle}>
            Register
          </Button>
          <TouchableOpacity>
            <Text style={styles.buttonTextStyle}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterOrSignIn;

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    top: 100,
  },
  titleContainer: {
    flex: 1,
    //backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
    width: width,
    paddingHorizontal: 50,
    height: 200,
    position: "absolute",
    top: height / 2.5,
  },
  title: {
    color: "#383838",
    fontFamily: "satoshi-bold",
    fontSize: 35,
    textAlign: "center",
    marginBottom: 30,
    //position: "relative",
    //bottom: height / 6,
  },
  subtitle: {
    fontFamily: "satoshi-medium",
    fontSize: 24,
    color: "#797979",
    //backgroundColor: "red",
  },
  buttonContainer: {
    //flex:1 ,
    backgroundColor: "red",
    //alignSelf: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 360,
    paddingHorizontal: 50,
    //justifyContent: 'space-around',
    //alignContent: 'center'
  },
  textButton: {
    fontFamily: "satoshi-bold",
    fontSize: 25,
    color: "#313131",
  },
  view: {
    backgroundColor: "red",
  },
  image: {
    //position: "absolute",
    width: 380.07,
    height: 520.73,
    top: 300,
    left: 0,
    //top: 723.3,
    //backgroundColor: "red",
  },
  rootContainer: {
    flex: 1,
  },
  button: {
    width: 147,
    height: 73,
  },
  buttonTextStyle: {
    fontFamily: "satoshi-regular",
    fontSize: 25,
  },
});
