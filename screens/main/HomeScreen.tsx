import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES } from "@/constants/theme";
import { categories, ICONS, IMAGES, productsDiscounted } from "@/constants";
import DiagonalSplitView from "@/components/global/DiagonlBox";
import DiagonalBox from "@/components/global/DiagonlBox";
import ProductListing from "@/components/global/ProductListing";

const HomeScreen = () => {
  const userImage = IMAGES.userImage;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ad}>
          <Text style={styles.adText}>משלוח חינם מעל 500 ₪</Text>
        </View>

        <View style={styles.topMenu}>
          <Pressable>
            <Image
              source={ICONS.searchHome}
              resizeMode="contain"
              style={styles.icon}
            />
          </Pressable>
          <View>
            <Image
              source={IMAGES.logo}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          <View>
            <Image
              source={ICONS.menu}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
        </View>

        <View style={styles.userInfoBox}>
          <View style={styles.userInfoRight}>
            <Image
              source={userImage}
              style={styles.userImage}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.userInfoTitle}>שלום, דיאנה!</Text>
              <Text style={styles.userInfoDetails}>איזה כיף! יש לך:</Text>
            </View>
          </View>
          <View style={{ maxWidth: "45%" }}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.sixteen}>
              16.54 גיינז
            </Text>
          </View>
        </View>

        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>לפי קטגוריה</Text>
          <View style={{ height: 10 }} />
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {categories.map((category, index) => (
              <DiagonalBox
                key={index}
                text={category.title}
                height={100}
                width={100}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.discounted}>
          <Text style={styles.sectionTitle}>מבצעים והצעות מיוחדות</Text>
          {productsDiscounted.map((product, index) => (
            <ProductListing
              onPress={() => console.log(product)}
              price={product.price}
              discount={product.discount}
              image={product.image}
              onPressAddToCart={() => console.log("")}
              title={product.title}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  ad: {
    backgroundColor: COLORS.gray,
    padding: 10,
  },
  adText: {
    color: COLORS.primary,
    textAlign: "center",
    fontFamily: FONTS.light,
    fontSize: 20,
  },

  icon: {
    width: 24,
    height: 24,
  },

  logo: {
    width: 120,
    height: 40,
  },
  topMenu: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  userInfoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  userInfoRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userInfoTitle: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 16,
    textAlign: "left",
  },
  userInfoDetails: {
    color: COLORS.white,
    fontFamily: FONTS.light,
    fontSize: 16,
    textAlign: "left",
  },
  userImage: {
    width: 50,
    height: 50,
  },

  sixteen: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 32,
  },

  sectionTitle: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: SIZES.h2,
    textAlign: "left",
    marginTop: 10,
  },
  viewDiagnal: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesSection: {
    marginHorizontal: 20,
  },
});
