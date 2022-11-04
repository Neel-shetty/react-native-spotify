import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

const ProgressBar = () => {
  const width = Dimensions.get("window").width * 0.85;
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.bar}>
      <Progress.Bar
        progress={0.3}
        width={width}
        useNativeDriver={true}
        borderWidth={0}
        color="#434343"
        //unfilledColor="rgba(0, 0, 0, 0.3)"
        height={4}
      />
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  bar: {
    width : Dimensions.get('window').width * 0.85,
    height: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignSelf: 'center',
    justifyContent: 'center'
  }
});
