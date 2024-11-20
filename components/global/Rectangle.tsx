import { COLORS } from "@/constants/theme";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Polygon } from "react-native-svg";

interface RectangleProps {
  color1: string;
  color2: string;
  title: string;
  width: number; // Dynamic width
  height: number; // Dynamic height
}

const Rectangle: React.FC<RectangleProps> = ({
  color1 = COLORS.primary,
  color2 = COLORS.secondary,
  title = "כותרת",
  width = 150,
  height = 50,
}) => {
  return (
    <View style={[styles.container, { width, height }]}>
      <Svg height={height} width={width} style={styles.svg}>
        <Polygon
          points={`0,0 ${width},0 ${width},${height} 0,${height}`} // Four corners of the rectangle
          fill={color1}
        />
        <Polygon
          points={`0,0 ${width},0 ${width},${height} 0,${height}`} // Second triangle
          fill={color2}
        />
      </Svg>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    overflow: "hidden",
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Rectangle;
