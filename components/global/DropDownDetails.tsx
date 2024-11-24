import { Pressable, StyleSheet, Text, View, Animated } from "react-native";
import React, { useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, FONTS } from "@/constants/theme";
import { DropDownDetailsProps } from "@/constants/types";

const DropDownDetails: React.FC<DropDownDetailsProps> = ({
  title = "כותרת",
  details = "פרטים",
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Animated value for rotation
  const rotation = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    // Toggle the state
    setIsOpen((prev) => !prev);

    // Animate rotation
    Animated.timing(rotation, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Interpolating rotation value to degrees
  const rotateIcon = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"], // 0 to 180 degrees rotation
  });

  return (
    <View>
      <Pressable onPress={toggleDropdown} style={styles.topContainer}>
        <Text style={styles.title}>{title}</Text>
        <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
          <Ionicons name="arrow-up-circle" size={20} color="white" />
        </Animated.View>
      </Pressable>
      {isOpen && (
        <View style={styles.detailsBox}>
          <Text>
            אפליקציה מעולה! עוזרת לי לעקוב אחרי צריכת החלבון בצורה פשוטה ונוחה.
            מאוד ממליץ לכל מי שמתאמן.
          </Text>
        </View>
      )}
    </View>
  );
};

export default DropDownDetails;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    padding: 10,
  },
  title: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 22,
  },
  detailsBox: {
    backgroundColor: COLORS.white,
    padding: 10,
  },
});
