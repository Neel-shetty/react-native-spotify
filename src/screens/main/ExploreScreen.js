import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
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
  const [files, setFiles] = useState([]);

  async function move({ downloadFile }) {
    // const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    // if (perm.status != "granted") {
    //   return;
    // }
    console.log(downloadFile);
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
    const fileUri = `${FileSystem.documentDirectory}+shorts.mp4`;
    const downloadedFile = await FileSystem.downloadAsync(
      "https://rr4---sn-5hnekn7l.googlevideo.com/videoplayback?expire=1667958208&ei=YLFqY7LRItDggAeYwZHoCQ&ip=216.131.112.3&id=o-AI9QFViYaMquVnDNmWxPoUXG-h-0Ggkjk6oITE-P4JDK&itag=22&source=youtube&requiressl=yes&mh=MM&mm=31%2C29&mn=sn-5hnekn7l%2Csn-5hne6nzy&ms=au%2Crdu&mv=m&mvi=4&pl=24&pcm2=yes&initcwndbps=1055000&spc=SFxXNtWDKjT5awpOj9TU1Z4YYOyO4kQ&vprv=1&mime=video%2Fmp4&ns=hLxUxlOnfJ37b_zx7qXURdwJ&cnr=14&ratebypass=yes&dur=43.235&lmt=1667831549433941&mt=1667935511&fvip=5&fexp=24001373%2C24007246&c=WEB&txp=5432434&n=o3XtIMgmRA-I0g&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAKSbDhZWtOP9tAuESbHEBDPzQtSmj1rAixiCqCZMy_sVAiEA4JyfW8o47COM6m-1M86ievYwZxxcVu69VKJOIv5KYZA%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgXV8u6apQhc_I0TyAuVb85vbciV4gIhqFemp7UniG1lACIFmmM-Cvgv8NUOwuQQlIvDMMUcscLhRqsgMgP26jKvz3&title=Software%20Engineer%20Vs%20Designer",
      fileUri
    );
    console.log(downloadedFile.uri);
    // if (downloadedFile.status != 200) {
    //   handleError();
    // }
    try {
      const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri);
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

  async function getFiles() {
    let files = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
      album: 'music'
    });
    files = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
      first: files.totalCount,
    });
    //const folder = await MediaLibrary.getAssetInfoAsync('33 DADDY ! DADDY ! DO !.m4a')
    const tempFile = files.assets;
    setFiles(tempFile);
    //console.log(folder)
    //console.log(files.assets)
    //download();
  }

  useLayoutEffect(() => {
    getFiles();
  }, []);

  const width = Dimensions.get("window").width;
  const green = "green";
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      {/* <Image
        style={{ height: 200, width: 200 }}
        source={{
          uri: "file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540newfox%252FSpotifyClone/%2Bgigachad.png",
        }}
      />
      <Button onPress={download}>download</Button> */}
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
          ListHeaderComponent={()=>{
            return(
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>play/pause</Text>
                <Text>name</Text>
                <Text>duration</Text>
                <Text>like</Text>
              </View>
            )
          }}
          //endFillColor={'green'}
          
        />
      </View>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
