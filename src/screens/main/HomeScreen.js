import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import Button from "../../components/ui/Button";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Auth } from "aws-amplify";
import SongPreviewList from "../../components/SongPreview";
import CategoryBar from "../../components/CategoryBar";
import NewAlbum from "../../components/NewAlbum/NewAlbum";
import Playlist from "../../components/Playlist/Playlist";
import Logosmall from "../../components/ui/Logosmall";
import Header from "../../components/Header/Header";
import HomeIcon from '../../components/ui/HomeIcon'


const HomeScreen = () => {
  function logOut() {
    Auth.signOut();
  }

  const [fontsLoaded] = useFonts({
    "satoshi-bold": require("../../../assets/fonts/satoshi/Satoshi-Bold.otf"),
    "satoshi-regular": require("../../../assets/fonts/satoshi/Satoshi-Regular.otf"),
    "satoshi-medium": require("../../../assets/fonts/satoshi/Satoshi-Medium.otf"),
  });

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
      <ScrollView contentContainerStyle={styles.root}>
        {/* <Button>logout</Button> */}
        <View
          style={{
            width: width,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 30,
            paddingBottom: 24,
            //backgroundColor: "violet",
            //flex:0.8
          }}
        >
          <Header />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            //backgroundColor: "violet",
            paddingBottom:41
          }}
        >
          <NewAlbum />
          {/* <HomeIcon /> */}
        </View>
        <View style={{ flex: 5 }}>
          <View style={{ height: 30, marginBottom:30}}>
            <CategoryBar />
          </View>
          <View style={{ height: 242 ,marginBottom:30}}>
            <SongPreviewList />
          </View>
          <View
            style={{ flex: 3, alignItems: "center", justifyContent: "center" }}
          >
            <Playlist />
          </View>
        </View>
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
    flex: 1,
    //backgroundColor: "violet",
  },
});
