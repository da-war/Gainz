import { Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { COLORS } from "@/constants/theme";

const AppTabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/tabs/homc.png")
                  : require("@/assets/icons/tabs/home.png")
              }
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
            />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="(search)"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/tabs/searchc.png")
                  : require("@/assets/icons/tabs/search.png")
              }
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
            />
          ),
          title: "Search",
        }}
      />
      <Tabs.Screen
        name="(cart)"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/tabs/cartc.png")
                  : require("@/assets/icons/tabs/cart.png")
              }
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
            />
          ),
          title: "Cart",
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icons/tabs/profilec.png")
                  : require("@/assets/icons/tabs/profile.png")
              }
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
            />
          ),
          title: "Profile",
        }}
      />
    </Tabs>
  );
};

export default AppTabLayout;

