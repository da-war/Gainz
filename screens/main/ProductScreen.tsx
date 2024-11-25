import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { COLORS, FONTS, SIZES } from "@/constants/theme";

import { StarRatingDisplay } from "react-native-star-rating-widget";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { getDiscountedPrice } from "@/utils";
import CategorySelector from "@/components/global/CategorySelector";
import AppButton from "@/components/global/AppButton";
import DropDownDetails from "@/components/global/DropDownDetails";
import { IMAGES } from "@/constants";

const { width } = Dimensions.get("window");

const productsImages = [
  { id: 1, image: require("@/assets/images/protein.png") },
  { id: 2, image: require("@/assets/images/protein.png") },
  { id: 3, image: require("@/assets/images/protein.png") },
  { id: 4, image: require("@/assets/images/protein.png") },
];

const imageforAll = IMAGES.userImage;

const feedbacks = [
  //id,name,rating,feedback,date,imageforAll
  {
    id: 1,
    name: "יונתן מארי",
    rating: 4.5,
    feedback:
      "אפליקציה מעולה! עוזרת לי לעקוב אחרי צריכת החלבון בצורה פשוטה ונוחה. מאוד ממליץ לכל מי שמתאמן.",
    date: "2021-10-10",
    imageforAll: imageforAll,
  },
  {
    id: 2,
    name: "יונתן מארי",
    rating: 4.5,
    feedback:
      "אפליקציה מעולה! עוזרת לי לעקוב אחרי צריכת החלבון בצורה פשוטה ונוחה. מאוד ממליץ לכל מי שמתאמן.",
    date: "2021-10-10",
    imageforAll: imageforAll,
  },
  {
    id: 3,
    name: "יונתן מארי",
    rating: 4.5,
    feedback:
      "אפליקציה מעולה! עוזרת לי לעקוב אחרי צריכת החלבון בצורה פשוטה ונוחה. מאוד ממליץ לכל מי שמתאמן.",
    date: "2021-10-10",
    imageforAll: imageforAll,
  },
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
  feedbacks: feedbacks,
};

const ProductScreen = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isFav, setIsFav] = React.useState(true);
  const [quantity, setQuantity] = React.useState(1);
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

  const decreaseQuantity = () => {
    //make sure quantity can't be less than 1
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      Alert.alert("הכמות לא יכולה להיות פחות מ-1");
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
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

        <View style={styles.callToActionContainer}>
          <View>
            <Text style={styles.titleRating}>כמות:</Text>
            <View style={styles.quantityCal}>
              <Pressable style={styles.quantityFunc} onPress={decreaseQuantity}>
                <MaterialCommunityIcons
                  name="minus"
                  size={18}
                  color={COLORS.white}
                />
              </Pressable>
              <Text style={styles.quantityText}>{quantity}</Text>
              <Pressable
                style={styles.quantityFunc}
                onPress={incrementQuantity}
              >
                <MaterialCommunityIcons
                  name="plus"
                  size={18}
                  color={COLORS.white}
                />
              </Pressable>
            </View>
          </View>
          <AppButton
            title="הוספה לסל"
            onPress={() => console.log("Add To Cart")}
          />
          <Text style={styles.callToActionText}>משלוח חינם מעל 500 ₪</Text>
          <View style={styles.spacer} />
          <View>
            <Text style={styles.termsTitle}>משלוח והחזרות</Text>
            <Text style={styles.delivery}>זמן אספקה: 2-5 ימים</Text>
            <Text style={styles.delivery}>זמן אספקה VIP: יום אחד</Text>

            <Text style={styles.returnTitle}>
              אם אני לא לגמרי מרוצה מהרכישות שלי
            </Text>
            <Text style={styles.returnText}>
              אנא עיין{" "}
              <Text style={styles.returnColored}> במדיניות ההחזרות </Text>שלנו
            </Text>
          </View>

          <View style={styles.spacer} />

          <View style={styles.listBottom}>
            <DropDownDetails />
            <View style={styles.space} />
            <DropDownDetails />
            <View style={styles.space} />
            <DropDownDetails />
            <View style={styles.space} />
            <DropDownDetails />
            <View style={styles.space} />
            <DropDownDetails />
          </View>
        </View>

        <View style={[styles.spacer, { marginTop: 0 }]} />
        <View style={styles.rateContainer}>
          <Text style={styles.titleRating}>דירוגי לקוחות</Text>
          <View style={styles.mainRateContainer}>
            <Text style={styles.titlish}>{product.rating}</Text>
            <View>
              <View>
                <StarRatingDisplay
                  color={COLORS.secondary}
                  rating={product.rating}
                />
              </View>
              <Text>מבוסס על פידבקים מ-12,000 לקוחות</Text>
            </View>
          </View>
        </View>
        <View style={styles.spacer} />

        <View style={styles.feedbackContainer}>
          <Text style={styles.titleRating}>ביקורות הלקוחות</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {feedbacks.map((feedback, index) => (
              <View key={index}>
                <View style={styles.feedbackTopContainer}>
                  <View>
                    <Image
                      resizeMode="cover"
                      source={feedback.imageforAll}
                      style={styles.feedbackImage}
                    />
                  </View>
                  <View style={styles.leftContainerFeedback}>
                    <Text style={styles.feedbackTitle}>{feedback.name}</Text>
                    <StarRatingDisplay
                      rating={feedback.rating}
                      starSize={15}
                      color={COLORS.secondary}
                    />
                  </View>
                </View>
                <Text style={styles.review}>{feedback.feedback}</Text>
                <Text style={styles.date}>{feedback.date}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  quantityFunc: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  quantityText: {},
  quantityCal: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    maxWidth: 90,
    justifyContent: "space-between",
    borderRadius: 5,
    marginBottom: 18,
  },
  review: {
    textAlign: "left",
    marginBottom: 8,
    fontFamily: FONTS.regular,
    fontSize: SIZES.body3,
  },
  date: {
    color: COLORS.primary,
    fontSize: SIZES.body3_light,
    fontFamily: FONTS.light,
  },
  feedbackContainer: {
    marginHorizontal: 20,
  },
  titlish: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.h1,
  },
  mainRateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  leftContainerFeedback: {
    marginLeft: 15,
  },
  rateContainer: {
    marginHorizontal: 20,
  },
  titleRating: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.h3,
    color: COLORS.primary,
    textAlign: "left",
    marginBottom: 8,
  },

  listBottom: {
    marginBottom: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    overflow: "hidden",
  },
  space: { borderBottomWidth: 1, borderColor: COLORS.white },

  returnTitle: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.h3,
    color: COLORS.primary,
    textAlign: "left",
    marginTop: 10,
  },
  returnText: {
    fontFamily: FONTS.light,
    fontSize: SIZES.body2_light,
    textAlign: "left",
    color: COLORS.primary,
  },
  returnColored: {
    color: COLORS.secondary,
    fontFamily: FONTS.bold,
    fontSize: SIZES.h3,
  },

  termsTitle: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.h3,
    color: COLORS.primary,
    textAlign: "left",
  },
  delivery: {
    fontFamily: FONTS.light,
    fontSize: SIZES.body2_light,
    textAlign: "left",
    color: COLORS.primary,
  },

  callToActionContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  callToActionText: {
    fontFamily: FONTS.light,
    fontSize: SIZES.body1_light,
    color: COLORS.primary,
    textAlign: "center",
    marginTop: 8,
  },
  spacer: {
    marginVertical: 16,
    borderBottomColor: COLORS.themeGray,
    borderColor: COLORS.primary,
    borderBottomWidth: 0.5,
    marginHorizontal: 20,
  },
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
  feedbackTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  feedbackImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  feedbackTitle: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.h3,
    color: COLORS.primary,
    textAlign: "left",
  },
});
