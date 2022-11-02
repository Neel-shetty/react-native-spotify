import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const CategoryBar = () => {
  const categories = ["New", "Videos", "Artists", "Podcasts", "Trending"];

  function onSelect(ind) {
    const tempData = [];
    data.map((item, index) => {
      if (index === ind) {
        tempData.push(true);
      } else {
        tempData.push(false);
      }
    });
    setData(tempData);
  }

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <Text
              onPress={()=>{onSelect(index)}}
              style={{
                fontSize: 20,
                fontFamily: "satoshi-medium",
                paddingHorizontal: 25,
                backgroundColor:"pink"
              }}
            >
              {item}
            </Text>
          );
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryBar;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "satoshi-medium",
    paddingHorizontal: 25,
  },
});
