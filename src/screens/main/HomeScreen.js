import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import Button from "../../components/ui/Button";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Auth } from "aws-amplify";
import SongPreviewList from "../../components/HomeScreenComponents/SongPreview";
import CategoryBar from "../../components/HomeScreenComponents/CategoryBar";
import NewAlbum from "../../components/HomeScreenComponents/NewAlbum/NewAlbum";
import Playlist from "../../components/HomeScreenComponents/Playlist/Playlist";
import Header from "../../components/HomeScreenComponents/Header/Header";
import SearchIcon from "../../components/ui/SearchIcon";
import MenuDots from "../../components/ui/MenuDots";
import * as MediaLibrary from 'expo-media-library';

const HomeScreen = () => {
  function logOut() {
    Auth.signOut();
  }

  const [fontsLoaded] = useFonts({
    "satoshi-bold": require("../../../assets/fonts/satoshi/Satoshi-Bold.otf"),
    "satoshi-regular": require("../../../assets/fonts/satoshi/Satoshi-Regular.otf"),
    "satoshi-medium": require("../../../assets/fonts/satoshi/Satoshi-Medium.otf"),
  });

  // useEffect(()=>{
  //   async function getPermission(){
  //     const permission = await MediaLibrary.getPermissionsAsync()
  //     console.log(permission)
  //   }
  //   async function requestPermission() {
  //     const request = await MediaLibrary.requestPermissionsAsync()
  //     console.log(request)
  //   }
  //   getPermission()
  //   requestPermission()
  // },[])

  async function getFiles(){

  }

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.root}
        nestedScrollEnabled={true}
      >
        {/* <Button>logout</Button> */}
        <>
          <View
            style={{
              width: width,
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 30,
              paddingBottom: 24,
              flexDirection: "row",
              paddingHorizontal: 35,
              //backgroundColor: "violet",
              //flex:0.8
            }}
          >
            <TouchableOpacity>
              <SearchIcon />
            </TouchableOpacity>

            <Header />
            <MenuDots />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
              //backgroundColor: "violet",
              paddingBottom: 41,
              //paddingHorizontal:60
            }}
          >
            <NewAlbum />
          </View>
          <View style={{ flex: 5 }}>
            <View style={{ height: 30, marginBottom: 30 }}>
              <CategoryBar />
            </View>
            <View style={{ height: 242, marginBottom: 30 }}>
              <SongPreviewList />
            </View>
            <View
              style={{
                flex: 3,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <ScrollView horizontal={true} style={{ width: "100%" }}> */}
                <Playlist />
              {/* </ScrollView> */}
              {/* <Text>test</Text> */}
            </View>
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  root: {
    //alignItems: "center",
    //justifyContent: "center",
    //flex: 1,
    //backgroundColor: "violet",
  },
});
