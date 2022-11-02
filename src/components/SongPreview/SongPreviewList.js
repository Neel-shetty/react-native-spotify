import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import SongPreview from "./SongPreview";
import previewData from "../../../assets/dummydata/previewData";

// const preview1 = previewData[0];
// const preview2 = previewData[1];

const SongPreviewList = () => {
  //console.log(previewData)
  return (
    <View style={{ flexDirection: "row",paddingHorizontal:10 }}>
      <FlatList
        data={previewData}
        renderItem={({ item }) => (
          <View style={{paddingHorizontal:7}}>
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
