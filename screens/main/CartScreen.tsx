import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import OptionButton from "@/components/global/OptionButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CartItem from "@/components/global/CartItem";
import { COLORS, FONTS } from "@/constants/theme";
import { router } from "expo-router";

// protein and gym supplements in hebrew , two line titles, taste, weight, price, add to cart
const cartItems = [
  {
    id: 1,
    title: "פרוטין ויטמין",
    taste: "פירות יער",
    weight: '1 ק"ג',
    price: 200,
  },
  {
    id: 2,
    title: "פרוטין ויטמין",
    taste: "פירות יער",
    weight: '1 ק"ג',
    price: 200,
  },
  {
    id: 3,
    title: "פרוטין ויטמין",
    taste: "פירות יער",
    weight: '1 ק"ג',
    price: 200,
  },
  {
    id: 4,
    title: "פרוטין ויטמין",
    taste: "פירות יער",
    weight: '1 ק"ג',
    price: 200,
  },
  {
    id: 5,
    title: "פרוטין ויטמין",
    taste: "פירות יער",
    weight: '1 ק"ג',
    price: 200,
  },
  {
    id: 6,
    title: "פרוטין ויטמין",
    taste: "פירות יער",
    weight: '1 ק"ג',
    price: 200,
  },
  {
    id: 7,
    title: "פרוטין ויטמין",
    taste: "פירות יער",
    weight: '1 ק"ג',
    price: 200,
  },
  {
    id: 8,
    title: "פרוטין ויטמין",
    taste: "פירות יער",
    weight: '1 ק"ג',
    price: 200,
  },
  {
    id: 9,
    title: "פרוטין ויטמין",
    taste: "פירות יער",
    weight: '1 ק"ג',
    price: 200,
  },
];

const CartScreen = () => {
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingBottom: 120 }}>
        <OptionButton
          defaultSelected="Option 1"
          options={["Option 1", "Option 2"]}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((item) => (
            <CartItem
              title={item.title}
              taste={item.taste}
              weight={item.weight}
              price={item.price}
              isFavorite={false}
            />
          ))}
        </ScrollView>

        <View style={styles.absoluteContainer}>
          <View style={styles.totalContainer}>
            <Pressable style={styles.orangeBtn}>
              <Text>להחיל הנחה</Text>
            </Pressable>
            <View>
              <Text style={styles.totalTexto}>
                {cartItems.length} פריטים - סה"כ:{" "}
              </Text>
              <Text style={styles.totalTexto}>{getTotalPrice()}</Text>
            </View>
          </View>
          <Pressable
            onPress={() => router.push("/checkout")}
            style={styles.checkoutBtn}
          >
            <Text style={styles.checkoutText}>לתשלום</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  absoluteContainer: {
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width - 40,
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 20,
  },
  orangeBtn: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
  },
  checkoutBtn: {
    backgroundColor: "black",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutText: {
    color: "white",
    fontFamily: FONTS.bold,
    fontSize: 20,
  },
  totalTexto: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    textAlign: "left",
  },
});
