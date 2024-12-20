import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, width } from "@/constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getDiscountedPrice } from "@/utils";
import { ProductListingProps } from "@/constants/types";
import { IMAGES } from "@/constants";

const ProductListing: React.FC<ProductListingProps> = ({
  discount = 0,
  price = 110,
  title = "אבקת חלבון ווי גורילה מוד | מוח הגורילה",
  image = IMAGES.productOne,
  rating = 4.5,
  totalFeedbacks = 100,
  afterDiscount = 100,
  isFav = false,
  onPress = () => {},
  style,
}) => {
  const isDiscounted = discount > 0 ? true : false;
  const [isFavo, setIsFavo] = React.useState<null | boolean>(isFav);

  const handleFav = () => {
    setIsFavo(!isFavo);
  };
  return (
    <Pressable style={[styles.mainContainer, style]} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" source={image} style={styles.image} />
        {discount > 0 && (
          <View style={styles.discountShow}>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.discountText}
            >
              {discount}%
            </Text>
          </View>
        )}

        <Pressable onPress={handleFav} style={styles.favIcon}>
          <MaterialCommunityIcons
            size={20}
            color={COLORS.primary}
            name={isFavo ? "heart" : "heart-outline"}
          />
        </Pressable>
      </View>
      <View style={styles.bgMid}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.midContainer}>
          <View style={styles.priceContainer}>
            <Text
              style={[
                styles.priceText,
                isDiscounted && { textDecorationLine: "line-through" },
              ]}
            >
              {price}
              <Text style={styles.currencySymbol}>₪</Text>
            </Text>
            {isDiscounted && (
              <Text style={styles.afterDiscountText}>
                {getDiscountedPrice(price, discount)}
                {isDiscounted && (
                  <Text
                    style={[styles.currencySymbol, { color: COLORS.third }]}
                  >
                    ₪
                  </Text>
                )}
              </Text>
            )}
          </View>
          <View style={styles.ratingContainer}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={COLORS.secondary}
            />
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.afterRating}>{"(" + totalFeedbacks + ")"}</Text>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => console.log("add to cart")}
        style={styles.cartContainer}
      >
        <Text style={styles.cartText}>הוספה לסל</Text>
      </Pressable>
    </Pressable>
  );
};

export default ProductListing;

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: 10,
    borderRadius: 5,
    overflow: "hidden",
    maxWidth: 186,
    minWidth: width / 2.5,
  },
  bgMid: {
    backgroundColor: COLORS.white,
    padding: 4,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    height: 150,
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.grayBg,
  },
  discountShow: {
    backgroundColor: COLORS.third,
    position: "absolute",
    top: 15,
    right: 0,
    width: "28%",
    justifyContent: "center",
    alignItems: "center",
  },
  favIcon: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  title: {
    fontSize: SIZES.h3,
    fontFamily: FONTS.bold,
    textAlign: "left",
    marginBottom: 5,
  },
  midContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceText: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    textAlign: "left",
  },
  afterDiscountText: {
    textAlign: "left",
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.third,
    marginLeft: 2,
  },
  currencySymbol: {
    fontSize: 12,
    fontFamily: FONTS.bold,
    textAlign: "left",
  },
  discountText: {
    fontSize: SIZES.h4,
    color: COLORS.white,
    fontFamily: FONTS.bold,
    textAlign: "left",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontFamily: FONTS.bold,
    fontSize: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  afterRating: {
    color: "gray",
    fontSize: 12,
    fontFamily: FONTS.light,
    marginLeft: 5,
  },
  cartContainer: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
  },
  cartText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.h3,
    color: COLORS.white,
  },
});
