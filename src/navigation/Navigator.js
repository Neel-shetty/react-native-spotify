import { View, Text, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GetStartedScreen from "../screens/onboarding/GetStartedScreen";
import RegisterOrSignIn from "../screens/login/RegisterOrSignIn";
import RegisterScreen from "../screens/login/RegisterScreen";
import SignInScreen from "../screens/login/SignInScreen";
import ChooseMode from "../screens/onboarding/ChooseMode";
import ResetPassword from "../screens/login/ResetPassword";
import ConfirmScreen from "../screens/login/ConfirmScreen";
import { Auth, Hub } from "aws-amplify";
import HomeScreen from "../screens/main/HomeScreen";
import Logosmall from "../components/ui/Logosmall";
import ExploreScreen from "../screens/main/ExploreScreen";
import PlaylistScreen from "../screens/main/PlaylistScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import HomeIcon from "../components/ui/HomeIcon";
import HomeIconOutline from "../components/ui/HomeIconOutline";
import Explore from "../components/ui/Explore";
import ExploreOutline from "../components/ui/ExploreOutline";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    function listener(data) {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkUser();
      }
    }
    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  async function checkUser() {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (e) {
      console.log(e);
      setUser(null);
    }
  }

  /* if (user === undefined) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  } */

  function MainApp() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { height:73 },
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <HomeIcon /> : <HomeIconOutline />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ExploreScreen"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <ExploreOutline /> : <Explore />,
            headerShown: false,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="PlaylistScreen"
          component={PlaylistScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <HomeIcon /> : <HomeIconOutline />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <HomeIcon /> : <HomeIconOutline />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainApp">
        {/* {user ? ( */}
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={() => ({
            tabBarStyle: {
              display: "none",
            },
            tabBarButton: () => null,
            headerShown: false,
          })}
        />
        {/* ) : ( */}
        <>
          <Stack.Screen
            name="GetStarted"
            component={GetStartedScreen}
            options={() => ({
              tabBarStyle: {
                display: "none",
              },
              tabBarButton: () => null,
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="ChooseMode"
            component={ChooseMode}
            options={() => ({
              tabBarStyle: {
                display: "none",
              },
              tabBarButton: () => null,
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="RegisterOrSignIn"
            component={RegisterOrSignIn}
            options={() => ({
              tabBarStyle: {
                display: "none",
              },
              tabBarButton: () => null,
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={() => ({
              tabBarStyle: {
                display: "none",
              },
              tabBarButton: () => null,
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="ConfirmScreen"
            component={ConfirmScreen}
            options={() => ({
              tabBarStyle: {
                display: "none",
              },
              tabBarButton: () => null,
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={() => ({
              tabBarStyle: {
                display: "none",
              },
              tabBarButton: () => null,
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={() => ({
              tabBarStyle: {
                display: "none",
              },
              tabBarButton: () => null,
              headerShown: false,
            })}
          />
        </>
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
