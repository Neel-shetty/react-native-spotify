import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SongCover from "../../components/MusicPlayerComponents/SongCover";
import SongInfo from "../../components/MusicPlayerComponents/SongInfo";
import ProgressBar from "../../components/MusicPlayerComponents/ProgressBar";
import Controls from "../../components/MusicPlayerComponents/Controls";

const MusicPlayer = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3 }}>
        <SongCover songId={1}/>
      </View>
      <View style={{ flex: 1 }}>
        <SongInfo />
      </View>
      <View style={{ flex: 1 }}>
        <ProgressBar />
      </View>
      <View style={{ flex: 1 }}>
        <Controls />
      </View>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({});
