import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
  LayoutAnimation,
  Easing,
} from "react-native";
import React, { useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, FONTS } from "@/constants/theme";
import { DropDownDetailsProps } from "@/constants/types";

const DropDownDetails: React.FC<DropDownDetailsProps> = ({
  title = "כותרת",
  details = "פרטים",
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Animated values for rotation and height
  const rotation = useRef(new Animated.Value(0)).current;
  const heightAnim = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    // Animate rotation
    Animated.timing(rotation, {
      toValue: nextState ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Animate height
    Animated.timing(heightAnim, {
      toValue: nextState ? 1 : 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

  // Interpolating rotation value to degrees
  const rotateIcon = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"], // Rotate from 0 to 180 degrees
  });

  // Interpolating height for the details box
  const heightInterpolation = heightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], // Adjust 100 to the maximum content height
  });

  // Opacity animation
  const opacityInterpolation = heightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View>
      <Pressable
        onPress={toggleDropdown}
        style={[
          styles.topContainer,
          { backgroundColor: isOpen ? COLORS.secondary : COLORS.primary },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
        <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
          <Ionicons name="arrow-up-circle" size={20} color="white" />
        </Animated.View>
      </Pressable>
      <Animated.View
        style={[
          styles.detailsBox,
          {
            height: heightInterpolation,
            opacity: opacityInterpolation,
          },
        ]}
      >
        <Text style={styles.detailsText}>
          אפליקציה מעולה! עוזרת לי לעקוב אחרי צריכת החלבון בצורה פשוטה ונוחה.
          מאוד ממליץ לכל מי שמתאמן.
        </Text>
      </Animated.View>
    </View>
  );
};

export default DropDownDetails;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  title: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 18,
  },
  detailsBox: {
    overflow: "hidden", // Ensures smooth height animation
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray,
  },
  detailsText: {
    padding: 10,
    color: COLORS.primary,
    fontFamily: FONTS.regular,
    textAlign: "left",
  },
});
