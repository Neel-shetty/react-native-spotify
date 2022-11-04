import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import previewData from "../../../assets/dummydata/previewData";

const SongCover = ({ songId }) => {
  // const preview = previewData
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: "pink",
      }}
    >
      <Image
        style={styles.image}
        source={{ uri: previewData[songId].content.ImageUri }}
      />
    </View>
  );
};

export default SongCover;

const ImageSize = Dimensions.get("window").width * 0.85;

const styles = StyleSheet.create({
  image: {
    height: ImageSize,
    width: ImageSize,
    borderRadius: 30,
  },
});
