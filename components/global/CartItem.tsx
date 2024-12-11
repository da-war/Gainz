import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "@/constants/theme";

interface CartItemProps {
  title: string;
  weight: string;
  taste: string;
  price: number;
  isFavorite: boolean;
  onPressFavorite: () => void;
  totalReviews: number;
  rating: number;
}

const CartItem: React.FC<CartItemProps> = ({
  isFavorite,
  title = "Title",
  weight,
  price,
  onPressFavorite,
  taste,
  totalReviews = 119,
  rating = 4.5,
}) => {
  const [isMyFav, setIsMyFav] = React.useState(false);
  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={require("@/assets/images/protein.png")}
          style={styles.image}
        />
        <Pressable style={styles.heart}>
          <MaterialCommunityIcons
            name={isFavorite ? "heart" : "heart-outline"}
            size={18}
            color="black"
          />
        </Pressable>
        <Pressable style={styles.bin}>
          <MaterialCommunityIcons name="delete" size={18} color="black" />
        </Pressable>
      </View>
      <View style={styles.infoContainer}>
        <View style={{ padding: 10 }}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{taste}</Text>
          <Text style={styles.text}>{weight}</Text>
          <View>
            <Text style={styles.text}>{price}</Text>
            <View style={styles.feedbacking}>
              <MaterialCommunityIcons
                name="star"
                size={16}
                color={COLORS.secondary}
              />
              <Text style={styles.rating}>{rating}</Text>
              <Text style={styles.review}>
                {"("}
                {totalReviews}
                {")"}
              </Text>
            </View>
          </View>
        </View>
        <Pressable style={styles.addToCartBtn}>
          <Text style={styles.addToCartText}>עבירה לסל</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  imageContainer: {
    width: "35%",
    backgroundColor: COLORS.grayBg,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 125,
    height: 140,
  },
  heart: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  bin: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    fontSize: SIZES.h3,
    textAlign: "left",
    fontFamily: FONTS.bold,
  },
  feedbacking: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rating: {
    fontSize: SIZES.h4,
    fontFamily: FONTS.bold,
    marginHorizontal: 5,
  },
  review: {
    fontSize: SIZES.h4,
    fontFamily: FONTS.bold,
    color: "gray",
  },
  addToCartBtn: {
    backgroundColor: COLORS.primary,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
});
