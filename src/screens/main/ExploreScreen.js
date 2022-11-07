import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as MediaLibrary from "expo-media-library";
import Button from "../../components/ui/Button";
import * as FileSystem from "expo-file-system";
// import * as Permissions from "expo-permissions";

const ExploreScreen = () => {
  async function move({ downloadFile }) {
    // const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    // if (perm.status != "granted") {
    //   return;
    // }

    try {
      const asset = await MediaLibrary.createAssetAsync(downloadFile);
      const album = await MediaLibrary.getAlbumAsync("Download");
      if (album == null) {
        await MediaLibrary.createAlbumAsync("Download", asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function download() {
    //const filename = waifu.png
    const fileUri = `${FileSystem.documentDirectory}+gigachad.png`;
    const downloadedFile = await FileSystem.downloadAsync(
      "https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg",
      fileUri
    );
    console.log(downloadedFile.uri);
    // if (downloadedFile.status != 200) {
    //   handleError();
    // }
    // move(downloadedFile);
  }

  async function getFiles() {
    // let files = await MediaLibrary.getAssetsAsync()

    // for (let i = 0; i < 30; i++) {
    //   console.log(files);
    // }

    download();
  }

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text>ExploreScreen</Text>
      <Button onPress={getFiles}>get Files</Button>
      <View style={{ flex: 1 }}>
        <Image
          source={{
            uri: "file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540newfox%252FSpotifyClone/%2Bgigachad.png",
          }}
          style={{ height: 300, width: 300 }}
        />
      </View>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
