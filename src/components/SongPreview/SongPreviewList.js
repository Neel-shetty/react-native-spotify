import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import SongPreview from "./SongPreview";
import previewData from "../../../assets/dummydata/previewData";

// const preview1 = previewData[0];
// const preview2 = previewData[1];

const SongPreviewList = () => {
  //console.log(previewData)
  return (
    <View style={{ flexDirection: "row"}}>
      <FlatList
        data={previewData}
        renderItem={({ item }) => (
          <View style={{ paddingLeft: 13,paddingRight:1 }}>
            <SongPreview preview={item} />
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SongPreviewList;

const styles = StyleSheet.create({});
