import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GetStartedScreen from "../screens/onboarding/GetStartedScreen";
import RegisterOrSignIn from "../screens/login/RegisterOrSignIn";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
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
        <Tab.Screen
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
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
