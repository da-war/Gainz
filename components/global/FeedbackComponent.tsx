import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IMAGES } from "@/constants";
import { COLORS, FONTS, SIZES } from "@/constants/theme";

import { StarRatingDisplay } from "react-native-star-rating-widget";
import { FeedbackComponentProps } from "@/constants/types";

const FeedbackComponent: React.FC<FeedbackComponentProps> = ({
  title = "יונתן מארי",
  rating = 4.5,
  review = "אפליקציה מעולה! עוזרת לי לעקוב אחרי צריכת החלבון בצורה פשוטה ונוחה. מאוד ממליץ לכל מי שמתאמן.",
  date = "2021-10-10",
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.absolute}></View>
      <View style={styles.topContainer}>
        <Image
          source={IMAGES.userImage}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.title}>{title}</Text>
        <StarRatingDisplay
          rating={rating}
          starSize={20}
          color={COLORS.secondary}
        />
      </View>
      <Text style={styles.review}>{review}</Text>
      <Text style={styles.review}>{date}</Text>
    </View>
  );
};

export default FeedbackComponent;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    height: 40,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.primary,
    overflow: "hidden",
    borderRadius: 5,
  },
  mainContainer: {
    height: 200,
    padding: 20,
    marginLeft: 20,
    width: 300,
    backgroundColor: COLORS.white,
  },
  image: {
    height: 50,
    width: 50,
  },

  topContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    fontSize: SIZES.h3,
  },
  review: {
    textAlign: "center",
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize: SIZES.body3,
    marginBottom: 20,
  },

  date: {
    textAlign: "center",
    color: COLORS.grayBg,
    fontFamily: FONTS.light,
    fontSize: SIZES.body3_light,
  },
});
