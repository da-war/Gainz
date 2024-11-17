import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES } from "@/constants/theme";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  titleColor?: string;
  btnColor?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  style,
  titleStyle,
  titleColor = COLORS.white,
  btnColor = COLORS.primary,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsHovered(true)} // Trigger hover effect
      onPressOut={() => setIsHovered(false)} // Reset hover effect
      style={[
        styles.container,
        style,
        { backgroundColor: isHovered ? COLORS.secondary : btnColor },
      ]}
    >
      <Text style={[styles.title, titleStyle, { color: titleColor }]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    width: "100%",
  },
  title: {
    fontSize: SIZES.button,
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
});
