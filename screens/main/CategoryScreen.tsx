import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES } from "@/constants/theme";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import ProductListing from "@/components/global/ProductListing";
import { IMAGES } from "@/constants";

export const products = [
  {
    id: 1,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
    discount: 0,
  },
  {
    id: 2,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
    discount: 0,
  },
  {
    id: 3,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
    discount: 0,
  },
  {
    id: 4,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
    discount: 0,
  },
  {
    id: 5,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
    discount: 0,
  },
  {
    id: 6,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
    discount: 0,
  },
  {
    id: 7,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
    discount: 0,
  },
  {
    id: 8,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
    discount: 0,
  },
  {
    id: 9,
    image: IMAGES.productOne,
    title: "ויטמין D-3 1000",
    price: 215,
    feedbacks: [1, 2, 3, 4, 5, 5, 6],
    rating: 4.5,
    isFav: false,
    discount: 0,
  },
];
const CategoryScreen = () => {
  const [selected, setSelected] = React.useState("מוצרים");
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.description}>קטיגוריה</Text>
        <Text style={styles.screenTitle}>חלבון</Text>
        <Pressable onPress={() => router.back()} style={styles.absolute}>
          <MaterialCommunityIcons name="arrow-right" size={24} />
        </Pressable>
      </View>

      <View style={styles.buttonsContainer}>
        <OptionButton
          title="מוצרים"
          selected={selected === "מוצרים"}
          onPress={() => setSelected("מוצרים")}
        />
        <OptionButton
          title="מותגים"
          selected={selected === "מותגים"}
          onPress={() => setSelected("מותגים")}
        />
      </View>

      <View
        style={{
          flex: 1,
          marginTop: 20,
          marginHorizontal: 20,
          marginLeft: 10,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ product }) => (
            <ProductListing style={styles.mainContainer2} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

interface OptionButtonProps {
  title: string;
  selected: boolean;
  onPress: () => void;
}
//two options buttons one selected other not and have different styles
const OptionButton: React.FC<OptionButtonProps> = ({
  title,
  selected,
  onPress,
}) => {
  return (
    <Pressable
      style={[styles.option, selected && styles.selected]}
      onPress={onPress}
    >
      <Text style={[styles.text, selected && styles.selectedLabel]}>
        {title}
      </Text>
      <Entypo
        name="triangle-down"
        size={16}
        color={selected ? COLORS.white : COLORS.primary}
      />
    </Pressable>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  mainContainer2: {
    flex: 1, // Ensures the component takes equal space
    borderRadius: 5,
    overflow: "hidden",
    maxWidth: "46%", // Ensures two items per row with some margin
    minWidth: "46%",
    marginBottom: 10,
  },

  columnWrapper: {
    justifyContent: "space-between",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.padding,
    marginHorizontal: 20,
    gap: 10,
  },
  //styles for the two buttons
  option: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    minWidth: "44%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  selected: {
    backgroundColor: COLORS.primary,
  },
  text: { color: COLORS.primary, fontSize: SIZES.body3 },
  selectedLabel: { color: COLORS.white },

  absolute: {
    position: "absolute",
    top: 10,
    left: 20,
  },
  mainContainer: {
    flex: 1,
  },
  screenTitle: {
    fontSize: SIZES.h2,
    fontFamily: FONTS.bold,
  },
  description: {
    fontSize: SIZES.body2_light,
    fontFamily: FONTS.light,
    color: COLORS.primary,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
