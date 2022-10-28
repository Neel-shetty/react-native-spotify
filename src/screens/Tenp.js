import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Tenp = () => {
  return (
    <View style={styles.root}>
      {/* <Text style={styles.text}>Tenp</Text>
      <Text style={styles.text}>Tenp</Text> */}

      <View style={styles.nest}>
        <Text style={styles.text}>Tenp1</Text>
        <View style={styles.nestx}>
          <Text style={styles.text}>Tenp1</Text>
          <Text style={styles.text}>Tenp2</Text>
          <Text style={styles.text}>Tenp1</Text>
          <Text style={styles.text}>Tenp2</Text>
        </View>
        <Text style={styles.text}>Tenp2</Text>
      </View>
      <View style={styles.nest2}>
        <Text style={styles.text}>Tenp1</Text>
        <Text style={styles.text}>Tenp2</Text>
      </View>
    </View>
  );
};

export default Tenp;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  nest: {
    flex: 2,
    backgroundColor: "gold",
    // flexDirection: "row",
    justifyContent: "space-evenly",
    width:550,
    height: 2400
  },
  nest2: {
    flex: 99,
    backgroundColor: "coral",
    // flexDirection: "row",
    justifyContent: "space-evenly",
  },
  nestx: {
    flex: 1,
    backgroundColor: "green",
    //flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    textAlign: "center",
    textAlignVertical: "center",
    //flex: 1
  },
});
