import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "@/constants/theme";

const index = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>index</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.h1,
    color: COLORS.third,
    fontFamily: FONTS.bold,
  },
});
