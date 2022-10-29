import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import InputOutline from "./InputOutline";

const Input = ({
  onChangeText,
  onBlur,
  value,
  secureTextEntry,
  placeholder,
  keyboardType,
}) => {
  //const [value, setValue] = useState("");
  return (
    <>
      <View>
        <View style={styles.rootContainer}>
          <View style={styles.outline}>
            <InputOutline />
          </View>
          <TextInput
            placeholder={placeholder}
            style={styles.input}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            //fontStyle={"satoshi-bold"}
          />
        </View>
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    alignSelf: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    //borderWidth: 3,
    width: 280,
    height: 80,
    borderColor: "black",
    borderRadius: 30,
    fontSize: 18,
    fontFamily: "satoshi-medium",
    //top: 80,

    //backgroundColor: 'green'
  },
  outline: {
    //position: 'absolute',
    alignItems: "center",
    //top: 80,
    //backgroundColor: 'blue'
  },
  rootContainer: {
    //backgroundColor: "red",
    flex: 1,
    padding: 50,
    width: 333,
    height: 80,
    alignSelf: "center",
    justifyContent: "center",
  },
});
