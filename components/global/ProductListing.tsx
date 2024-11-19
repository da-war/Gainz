import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/constants/theme";

interface ProductListingProps {
  discount?: number;
  price: number;
  title: string;
  image: string;
  rating?: number;
  totalFeedbacks?: number;
  afterDiscount?: number;
  onPress: () => void;
  onPressAddToCart: () => void;
  isFav?: boolean;
}

const ProductListing: React.FC<ProductListingProps> = ({
  discount,
  price,
  title,
  image,
  rating,
  totalFeedbacks,
  afterDiscount,

  onPress,
}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
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

        <View>
          <MaterialCommunityIcons name={"heart-outlined"} />
        </View>
      </View>
      <View>
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
};

export default ProductListing;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    height: 150,
    width: 125,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.grayBg,
  },
  discountShow: {
    backgroundColor: COLORS.third,
  },
});
