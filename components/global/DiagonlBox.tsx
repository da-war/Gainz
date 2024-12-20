import { COLORS } from "@/constants/theme";
import { DiagonalBoxProps } from "@/constants/types";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DiagonalBox: React.FC<DiagonalBoxProps> = ({
  height = 100,
  width = 100,
  text = "",
  style = {},
}) => {
  return (
    <View style={[styles.container, { height, width }, style]}>
      {/* Top Left Triangle */}
      <View style={[styles.triangleOne]} />
      {/* Bottom Right Triangle */}
      <View style={[styles.triangleTwo]} />
      {/* Centered Text */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    overflow: "hidden",
    marginLeft: 10,
  },
  triangle: {
    position: "absolute",
    width: 0,
    height: 0,
  },
  textContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  triangleOne: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderRightColor: "transparent",
    borderTopColor: COLORS.primary,
  },
  triangleTwo: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 100,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderBottomColor: COLORS.secondary,
  },
});

export default DiagonalBox;
