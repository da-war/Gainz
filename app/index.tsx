import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { router } from "expo-router";

const Index = () => {
  const [user, setUser] = useState<null | boolean>(null); // Assume null indicates loading state

  useEffect(() => {
    const timeout = setTimeout(() => {
      setUser(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (user === null) return;

    if (user) {
      router.replace("/(tabs)/home");
    } else {
      router.replace("/(auth)/welcome");
    }
  }, [user]);

  // Show loading indicator while determining user state
  if (user === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return null; // Component doesn't render anything else
};

export default Index;
