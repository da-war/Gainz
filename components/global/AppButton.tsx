import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
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
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style, { backgroundColor: btnColor }]}
    >
      <Text style={[styles.title, titleStyle, { color: titleColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
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
