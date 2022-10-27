import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Button from "../../components/ui/Button";
import Logosmall from "../../components/ui/Logosmall";
import BackArrow from "../../components/ui/backArrow";
import Input from "../../components/ui/Input";

const SignInScreen = ({ navigation }) => {
  function BackButton() {
    navigation.navigate("RegisterOrSignIn");
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={BackButton}>
            <Image
              source={require("../../../assets/images/Ellipse.png")}
              style={styles.backButton}
            />
            <BackArrow />
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <Logosmall />
        </View>
      </View>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign in</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>If You Need Any Support</Text>
            <TouchableOpacity>
              <Text style={styles.subtitle2}> Click Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.input1}>
          <Input>Enter Username or Email</Input>
        </View>
        <View style={styles.input2}>
          <Input>Password</Input>
        </View>
        <TouchableOpacity>
          <Text style={styles.recover}>Forgot password</Text>
        </TouchableOpacity>
        <View style={styles.view}>
          <Button style={styles.button}>Sign In</Button>
        </View>
      </View>
      <View style={styles.dividerContainer}>
        <Text style={styles.dividerText}>           -------------------------------------------------</Text><Text style={styles.dividerTextM}> OR </Text><Text style={styles.dividerText}>-------------------------------------------------</Text>
      </View>
      <View>
        <Text>google logo</Text>
        <Text>apple logo</Text>
      </View>
      <View>
        <Text>Registerpage sender textbutton</Text>
      </View>
    </View>
  );
};

export default SignInScreen;

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backButton: {
    top: 28,
    right: 3,
  },
  backButtonContainer: {
    //alignItems: 'center'
    paddingHorizontal: 20,
    paddingTop: 10,
    marginTop: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    position: "absolute",
    left: width / 2.5,
    top: 38,
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
    top: height / 20,
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
    fontSize: 15,
    color: "#797979",
    //backgroundColor: "red",
  },
  subtitle2: {
    fontFamily: "satoshi-medium",
    fontSize: 15,
    color: "#42C83C",
    //backgroundColor: "red",
  },
  subtitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    //backgroundColor: 'red',
    top: 250,
  },
  recover: {
    fontSize: 16,
    fontFamily: "satoshi-medium",
    padding: 5,
    color: "#383838",
    left: 90,
  },
  view: {
    //backgroundColor: "red",
    flex: 1,
    position: "absolute",
    top: 240,
    alignSelf: "center",
  },
  button: {
    width: 325,
    height: 80,
  },
  dividerContainer: {
    //backgroundColor: "red",
    top: 370,
    flexDirection: 'row',
    alignContent: 'center'
  },
  dividerText: {
    color:'#383838'
  },
  dividerTextM: {
    fontFamily: 'satoshi-medium',
    color: '#383838'
  },
});
