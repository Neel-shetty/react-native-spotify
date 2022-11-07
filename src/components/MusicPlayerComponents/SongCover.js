import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import previewData from "../../../assets/dummydata/previewData";
import { useRoute } from "@react-navigation/native";

const SongCover = () => {
  // const preview = previewData
  const route = useRoute()
  //console.log(route.params.songId)
  const songId = route.params.songId - 1
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

const height  = Dimensions.get("window").height
const ImageSize = height < 750 ? Dimensions.get("window").width * 0.65  : Dimensions.get("window").width * 0.85;
// console.log(height)

const styles = StyleSheet.create({
  image: {
    height: ImageSize,
    width: ImageSize,
    borderRadius: 30,
  },
});
