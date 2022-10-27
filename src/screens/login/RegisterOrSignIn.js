import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Logo from "../../components/ui/Logo";

const RegisterOrSignIn = () => {
  return (
    <>
      <StatusBar style="dark" />
      <View>
        <View style={styles.logoContainer}>
          <Logo width={196} height={59} scale={2} />
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
    alignItems: 'center',
    position: 'relative',
    top: height/4
  }
});
