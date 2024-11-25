import { Stack } from "expo-router";
import React from "react";

const CartStack = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="cart" />
    </Stack>
  );
};

export default CartStack;
