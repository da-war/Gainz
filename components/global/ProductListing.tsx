import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

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
      <View>
        <Image source={image} />
      </View>
    </Pressable>
  );
};

export default ProductListing;

const styles = StyleSheet.create({});
