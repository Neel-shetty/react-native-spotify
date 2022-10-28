import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GetStartedScreen from "../screens/onboarding/GetStartedScreen";
import RegisterOrSignIn from "../screens/login/RegisterOrSignIn";
import RegisterScreen from "../screens/login/RegisterScreen";
import SignInScreen from "../screens/login/SignInScreen";
import ChooseMode from "../screens/onboarding/ChooseMode";
import Tenp from "../screens/Tenp";
import ResetPassword from "../screens/login/ResetPassword";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        {/* <Tab.Screen
          name="temp"
          component={Tenp}
          options={() => ({
            tabBarStyle: {
              display: "none",
            },
            tabBarButton: () => null,
            headerShown: false,
          })}
        /> */}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
