import { Image, StyleSheet, Text, View, Dimensions , FlatList} from "react-native";
import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import Button from "../../components/ui/Button";
import * as FileSystem from "expo-file-system";
import DefaultHeader from "../../components/MusicPlayerComponents/DefaultHeader";
import { FlashList } from "@shopify/flash-list";
import PlaylistItem from "../../components/HomeScreenComponents/Playlist/PlaylistItem";
import PlaylistData from "../../../assets/dummydata/PlaylistData";
import PlaylistScreenItem from "../../components/PlaylistScreenComponents/PlaylistScreenItem";
// import * as Permissions from "expo-permissions";

const ExploreScreen = () => {
  const [files, setFiles] = useState([])
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
    let files = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
    });
    files = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
      first: files.totalCount
    });
    const tempFile = files.assets
    setFiles(tempFile)
    //console.log(files.assets)
    //download();
  }

  useEffect(()=>{
    getFiles()
  },[])

  const width = Dimensions.get("window").width;
  const green = "green"
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <View style={{ flex: 1, width: width }}>
        <DefaultHeader />
      </View>
      <View style={{ flex: 8, width: width }}>
        <FlashList
          data={files}
          //style={{width:width,height:500}}
          renderItem={({ item }) => <PlaylistScreenItem playlist={item}/>}
          key={files.id}
          estimatedItemSize={100}
          //endFillColor={'green'}
          
        />
      </View>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
