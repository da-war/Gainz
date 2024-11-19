import { Image, StyleSheet, Text, View } from "react-native";
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
        name="home"
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
        }}
      />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="cart" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default AppTabLayout;

const styles = StyleSheet.create({});
