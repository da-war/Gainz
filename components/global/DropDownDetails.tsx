import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, FONTS } from "@/constants/theme";

const DropDownDetails: React.FC<DropDownDetailsProps> = ({
  title = "כותרת",
  details = "פרטים",
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <View>
      <Pressable onPress={() => setIsOpen(!isOpen)} style={styles.topContainer}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name={isOpen ? "arrow-down-circle" : "arrow-up-circle"}
          size={20}
          color="white"
        />
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
