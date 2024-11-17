import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const AppTabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default AppTabLayout;

const styles = StyleSheet.create({});
