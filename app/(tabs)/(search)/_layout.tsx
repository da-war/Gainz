import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const SearchStack = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="search" />
      <Stack.Screen name="productDetails" />
      <Stack.Screen name="category" />
    </Stack>
  );
};

export default SearchStack;
