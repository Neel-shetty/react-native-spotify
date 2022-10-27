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
import BackArrow from "../../components/ui/backArrow";

const RegisterOrSignIn = ({ navigation }) => {
  function RegisterButton() {
    navigation.navigate("RegisterScreen");
  }

  function SignInButton() {
    navigation.navigate("SignInScreen");
  }

  function BackButton(){
    navigation.navigate('GetStarted')
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.rootContainer}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={BackButton}>
            <Image source={require('../../../assets/images/Ellipse.png')} style={styles.backButton}/>
            <BackArrow />
          </TouchableOpacity>
        </View>
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
            <Button
              style={styles.button}
              textStyle={styles.buttonTextStyle}
              onPress={RegisterButton}
            >
              Register
            </Button>
            <TouchableOpacity onPress={SignInButton}>
              <Text style={styles.signInButtonTextStyle}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
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
    top: 200,
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
    marginBottom: 25,
    //position: "relative",
    //bottom: height / 6,
  },
  subtitle: {
    fontFamily: "satoshi-medium",
    fontSize: 23,
    color: "#797979",
    //backgroundColor: "red",
  },
  buttonContainer: {
    //flex:1 ,
    //backgroundColor: "red",
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
    fontFamily: "satoshi-medium",
    fontSize: 25,
    color: 'white'
  },
  signInButtonTextStyle: {
    fontFamily: "satoshi-medium",
    fontSize: 25,
    textAlign: "center",
    textAlignVertical: "center",
    position: "relative",
    right: 30,
    top: 22,
    color: "#313131",
  },
  backButtonContainer: {
    //alignItems: 'center'
    paddingHorizontal: 20,
    paddingTop: 10,
    marginTop: 0
  },
  backButton: {
    top: 28,
    right: 3
  },
});
