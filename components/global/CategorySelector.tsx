import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "@/constants/theme";
import { CategorySelectorProps } from "@/constants/types";

const CategorySelector: React.FC<CategorySelectorProps> = ({
  title = "Title",
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}:</Text>
      {/* must have different styles of text and view if selected */}
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {categories.map((category, index) => (
          <Pressable
            onPress={() => onSelectCategory(category.toString())}
            key={index}
            style={[
              styles.categoryContainer,
              category === selectedCategory && styles.selectedCategoryView,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                category === selectedCategory && styles.selectedCategoryText,
              ]}
              onPress={() => onSelectCategory(category.toString())}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategorySelector;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 13,
    paddingLeft: 20,
  },
  title: {
    marginBottom: 8,
    textAlign: "left",
    fontFamily: FONTS.bold,
    fontSize: SIZES.h3,
  },
  categoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 80,
    borderRadius: 5,
    borderWidth: Platform.OS === "android" ? 1 : 0.5,
    borderColor: COLORS.gray,
    marginRight: 8,
  },
  categoryText: {
    fontSize: SIZES.body2,
    fontFamily: FONTS.regular,
    color: COLORS.themeGray,
  },
  selectedCategoryView: {
    borderColor: COLORS.primary,
  },
  selectedCategoryText: {
    color: COLORS.primary,
  },
});
