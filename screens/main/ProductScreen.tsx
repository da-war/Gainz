import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>ProductScreen</Text>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
