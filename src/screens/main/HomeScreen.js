import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useCallback, useEffect } from "react";
import Button from "../../components/ui/Button";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Auth } from "aws-amplify";
import SongPreviewList from "../../components/SongPreview";
import CategoryTitle from "../../components/CategoryBar/CategoryTitle";
import CategoryBar from "../../components/CategoryBar";

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
        <View style={{height: 30}}>
          <CategoryBar />
        </View>
        <View style={{ height: 242 }}>
          <SongPreviewList />
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
