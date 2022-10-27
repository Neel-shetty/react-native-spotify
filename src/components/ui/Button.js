import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Button = ({ children, onPress }) => {
  
  return (
    <View style={styles.rootContainer}>
      <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed }>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: "satoshi-bold",
    color: "#DADADA",
    textAlign: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#42C83C",
    textAlignVertical: "center",
  },
  titleContainer: {
    //backgroundColor: "white",
    width: 329,
    height: 92,
    top: 70,
    alignSelf: "center",
    borderRadius: 30,
    overflow: "hidden",
  }, 
  rootContainer: {
    //flex:1,
    //overflow:'hidden',
    //position: 'absolute',
    //top:5
  },
  pressed: {
    opacity: 0.5,
    color: 'red'
  },
});
