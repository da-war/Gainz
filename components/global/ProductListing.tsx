import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface ProductListingProps {
  discount?: number;
  price: number;
  title: string;
  rating?: number;
  totalFeedbacks?: number;
  afterDiscount?: number;
  onPress: () => {};
  onPressAddToCart: () => {};
}

const ProductListing: React.FC<ProductListingProps> = ({
  discount,
  price,
  title,
  rating,
  totalFeedbacks,
  afterDiscount,
  onPress,
}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <View>
        <Image source={} />
      </View>
    </Pressable>
  );
};

export default ProductListing;

const styles = StyleSheet.create({});
