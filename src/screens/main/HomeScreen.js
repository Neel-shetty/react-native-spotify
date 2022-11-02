import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
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
        <View><Header/></View>
        <View style={{ flex: 1 }}>
          <NewAlbum />
        </View>
        <View style={{flex: 1}}>
          <View style={{ height: 30 }}>
            <CategoryBar />
          </View>
          <View style={{ height: 242 }}>
            <SongPreviewList />
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Playlist/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    //backgroundColor: "violet",
  },
});
