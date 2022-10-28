import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import BackArrow from "../../components/ui/backArrow";
import Logosmall from "../../components/ui/Logosmall";

const ResetPassword = ({ navigation }) => {
  function submitButton() {
    navigation.navigate("SignInScreen");
  }
  function BackButton() {
    navigation.navigate("SignInScreen");
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.rootContainer}>
        <KeyboardAvoidingView
          style={styles.rootContainer}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
          enabled={Platform.OS === "ios" ? true : false}
        >
          <View style={styles.main}>
            <View style={styles.header}>
              <View style={styles.backButtonContiner}>
                <TouchableOpacity onPress={BackButton}>
                  <Image
                    source={require("../../../assets/images/Ellipse.png")}
                    style={styles.backButton}
                  />
                  <BackArrow style={styles.backArrow} />
                </TouchableOpacity>
              </View>
              <View style={styles.logoContainer}>
                <Logosmall />
              </View>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Reset Password</Text>
            </View>
            <View style={styles.inputContainer}>
              <Input>Enter Your Email</Input>
              <Input>OTP</Input>
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={submitButton} style={styles.button}>
                Reset Password
              </Button>
            </View>
          </View>
          <View style={styles.dummy}></View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

const width = Dimensions.get("window").width;
//console.log(StatusBar.currentHeight)

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    //paddingTop: StatusBar.currentHeight/1
  },
  main: {
    flex: 2,
    //backgroundColor: "red",
  },
  dummy: {
    flex: 1,
  },
  header: {
    flex: 2,
    //backgroundColor: "gold",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButtonContiner: {
    //flex: 1,
    paddingLeft: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "center",
    //flexDirection: 'row'
  },
  backArrow: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    bottom: 15,
  },
  backButton: {
    top: 13,
    //right: 3,
  },
  logoContainer: {
    //flex: 2,
    alignItems: "center",
    justifyContent: "center",
    //flexDirection: 'row',
    alignSelf: "center",
    //backgroundColor: "red",
    paddingRight: width / 2 - 50,
    //paddingTop: 55
  },
  titleContainer: {
    flex: 2,
    //backgroundColor: "violet",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#383838",
    fontFamily: "satoshi-bold",
    fontSize: 35,
    textAlign: "center",
    //marginBottom: 25,
    textAlignVertical: "center",
  },
  inputContainer: {
    flex: 5,
    //backgroundColor: "pink",
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    marginBottom: 40,
  },
  buttonContainer: {
    flex: 3,
  },
});
