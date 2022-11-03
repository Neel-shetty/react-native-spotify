import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Demo = () => {
  const [isSelected, setIsSelected] = useState(YourData);

  function YourFunction(index) {
    const TempArray = [];
  }

  return (
    <View>
      <FlatList
        data={YourData}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={YourFunction(index)}>
              <TheComponentYouWantToRender
                passYourData={item}
                style={{
                  backgroundColor: isSelected[index].selected
                    ? "violet"
                    : "pink",
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({});
