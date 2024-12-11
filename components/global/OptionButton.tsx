import { COLORS } from "@/constants/theme";
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

interface OptionButtonProps {
  options?: string[]; // Array of option labels
  defaultSelected?: string; // Default selected option
  onOptionSelect?: (selected: string) => void; // Callback function
  activeBgColor?: string; // Background color for active option
  activeTextColor?: string; // Text color for active option
  inactiveBgColor?: string; // Background color for inactive option
  inactiveTextColor?: string; // Text color for inactive option
  containerStyle?: StyleProp<ViewStyle>; // Custom style for container
  buttonStyle?: StyleProp<ViewStyle>; // Custom style for buttons
  textStyle?: StyleProp<TextStyle>; // Custom style for text
}

const OptionButton: React.FC<OptionButtonProps> = ({
  options = ["Option 1", "Option 2"], // Default options
  defaultSelected = "Option 1",
  onOptionSelect,
  activeBgColor = COLORS.secondary, // Default active background color
  activeTextColor = "#FFFFFF", // Default active text color
  inactiveBgColor = "#FFFFFF", // Default inactive background color
  inactiveTextColor = "#808080", // Default inactive text color
  containerStyle,
  buttonStyle,
  textStyle,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultSelected);

  const handleOptionSelect = useCallback(
    (option: string) => {
      setSelectedOption(option);
      if (onOptionSelect) {
        onOptionSelect(option);
      }
    },
    [onOptionSelect]
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.optionButton,
            buttonStyle,
            selectedOption === option
              ? { backgroundColor: activeBgColor }
              : { backgroundColor: inactiveBgColor },
          ]}
          onPress={() => handleOptionSelect(option)}
        >
          <Text
            style={[
              styles.optionText,
              textStyle,
              selectedOption === option
                ? { color: activeTextColor }
                : { color: inactiveTextColor },
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 16,
    borderRadius: 5,
    overflow: "hidden",
  },
  optionButton: {
    paddingVertical: 4,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OptionButton;
