import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SongPreview from "./SongPreview";
import previewData from "../../../assets/dummydata/previewData";

const preview1 = previewData[0];
const preview2 = previewData[1];

const SongPreviewList = () => {
  //console.log(previewData)
  return (
    <View style={{flexDirection:'row'}}>
      <SongPreview preview={preview1} />
      <SongPreview preview={preview2} />
    </View>
  );
};

export default SongPreviewList;

const styles = StyleSheet.create({});
