import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { COLORS, FONTS, SIZES } from "@/constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { getDiscountedPrice } from "@/utils";
import CategorySelector from "@/components/global/CategorySelector";

const { width } = Dimensions.get("window");

const productsImages = [
  { id: 1, image: require("@/assets/images/protein.png") },
  { id: 2, image: require("@/assets/images/protein.png") },
  { id: 3, image: require("@/assets/images/protein.png") },
  { id: 4, image: require("@/assets/images/protein.png") },
];

const product = {
  images: productsImages,
  itemName: "Protein",
  price: 200,
  discount: 0,
  rating: 4.5,
  totalFeedbacks: 100,
  tastes: ["בננה", " תות", "וניל", "עוגיות"],
  weights: ["1KG", "2KG", "3KG"],
};

const ProductScreen = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isFav, setIsFav] = React.useState(true);
  const [currentTaste, setCurrentTaste] = React.useState<string>(
    product.tastes[0]
  );
  const [currentWeight, setCurrentWeight] = React.useState<string>(
    product.weights[0]
  );

  const isDiscounted = product.discount > 0 ? true : false;
  const price = product.price;
  const discount = product.discount;
  const afterDiscount = getDiscountedPrice(price, discount);
  const rating = product.rating;
  const totalFeedbacks = product.totalFeedbacks;

  const handleIndexChange = ({ index }: { index: number }) => {
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.carouselContainer}>
          <SwiperFlatList
            data={productsImages}
            renderItem={({ item }) => (
              <View style={styles.slide}>
                <Image source={item.image} style={styles.productImage} />
              </View>
            )}
            index={currentIndex}
            onChangeIndex={handleIndexChange}
            showPagination
            PaginationComponent={() => (
              <View style={styles.paginationContainer}>
                {productsImages.map((_, idx) => (
                  <View
                    key={idx}
                    style={[
                      styles.paginationDot,
                      idx === currentIndex
                        ? styles.activePaginationDot
                        : styles.inactivePaginationDot,
                    ]}
                  />
                ))}
              </View>
            )}
            autoplay={false}
          />

          <Pressable
            onPress={() => setIsFav(!isFav)}
            style={styles.absoluteOne}
          >
            <MaterialCommunityIcons
              name={isFav ? "heart" : "heart-outline"}
              size={24}
              color={COLORS.primary}
              onPress={() => setIsFav(!isFav)}
            />
          </Pressable>
          <Pressable style={styles.absoluteTwo} onPress={() => router.back()}>
            <MaterialCommunityIcons
              name="arrow-right"
              size={24}
              color={COLORS.primary}
            />
          </Pressable>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.itemName}>{product.itemName}</Text>
          <View style={styles.ratingPriceContainer}>
            <View>
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
            </View>
            <View style={styles.ratingContainer}>
              <MaterialCommunityIcons
                name="star"
                size={12}
                color={COLORS.secondary}
              />
              <Text style={styles.rating}>{rating}</Text>
              <Text style={styles.afterRating}>
                {"(" + totalFeedbacks + ")"}
              </Text>
            </View>
          </View>
        </View>

        <View>
          <CategorySelector
            title="טעמים"
            selectedCategory={currentTaste}
            categories={product.tastes}
            onSelectCategory={(taste) => setCurrentTaste(taste)}
          />
        </View>
        <View>
          <CategorySelector
            title="משקל"
            selectedCategory={currentWeight}
            categories={product.weights}
            onSelectCategory={(weight) => setCurrentWeight(weight)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  absoluteOne: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  absoluteTwo: {
    position: "absolute",
    top: 20,
    left: 20,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  carouselContainer: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.themeGray,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  slide: {
    width: width - 40, // Occupies full screen width
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: 250,
    height: 240,
    resizeMode: "contain",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activePaginationDot: {
    backgroundColor: COLORS.primary,
    transform: [{ scale: 1.2 }], // Makes the active dot slightly larger
  },
  inactivePaginationDot: {
    backgroundColor: COLORS.gray,
    opacity: 0.6,
  },
  secondContainer: {
    padding: 20,
    paddingTop: 4,
  },
  itemName: {
    textAlign: "left",
    fontFamily: FONTS.bold,
    fontSize: SIZES.h3,
  },

  priceText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.h3,
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
  ratingPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.themeGray,
  },
});
