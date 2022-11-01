import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CategoryTitle from "./CategoryTitle";

const CategoryBar = () => {
  const categories = ["New", "Videos", "Artists", "Podcasts", "Trending"];
  const [data, setData] = useState([false, false, false, false, false]);

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
                backgroundColor: item ==true ? "pink" : 'red',
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
