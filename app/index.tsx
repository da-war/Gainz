import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { router } from "expo-router";

const Index = () => {
  const [user, setUser] = useState<null | boolean>(null); // Assume null indicates loading state

  useEffect(() => {
    // Simulate user authentication check
    const timeout = setTimeout(() => {
      setUser(false); // Set to true/false based on authentication logic
    }, 1000); // Example delay for async check

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (user === null) return; // Avoid navigating while still loading

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
