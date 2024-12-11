import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const CheckoutScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.screenTitle}>תשלום</Text>
        <Pressable onPress={() => router.back()} style={styles.absolute}>
          <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
