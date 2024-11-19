import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
  const [loaded] = useFonts({
    "OSC-Bold": require("../assets/fonts/OpenSans_Condensed-Bold.ttf"),
    "OSC-Light": require("../assets/fonts/OpenSans_Condensed-Light.ttf"),
    "OSC-Regular": require("../assets/fonts/OpenSans_Condensed-Regular.ttf"),
    "OSC-SemiBold": require("../assets/fonts/OpenSans_Condensed-SemiBold.ttf"),
    "OSC-BoldItalic": require("../assets/fonts/OpenSans_Condensed-BoldItalic.ttf"),
    "OSC-Italic": require("../assets/fonts/OpenSans_Condensed-Italic.ttf"),
    "OSC-LightItalic": require("../assets/fonts/OpenSans_Condensed-LightItalic.ttf"),
    "OSC-SemiBoldItalic": require("../assets/fonts/OpenSans_Condensed-SemiBoldItalic.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Slot />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
