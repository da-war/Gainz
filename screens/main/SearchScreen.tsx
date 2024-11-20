import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories, ICONS } from "@/constants";
import { COLORS, FONTS } from "@/constants/theme";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.containerOne}>
        <Image
          source={ICONS.search2}
          resizeMode="contain"
          style={styles.image}
        />
        <TextInput
          placeholder="חיפוש"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          numColumns={2} // Two columns
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={styles.columnWrapper} // Adds space between columns
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                console.log({
                  id: item.id,
                  name: item.title,
                })
              }
              style={styles.itemContainer}
            >
              <Image
                style={styles.itemImage}
                source={require("@/assets/images/mask.png")}
                resizeMode="cover"
              />

              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    overflow: "hidden",
  },
  containerOne: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: COLORS.grayBg,
    borderRadius: 5,
  },
  image: {
    width: 22,
    height: 22,
  },
  input: {
    flex: 1,
    textAlign: "right",
  },
  categoriesContainer: {
    flex: 1,
    paddingTop: 10,
    marginHorizontal: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 0,
  },
  itemContainer: {
    width: "48%",
    marginBottom: 10,
  },
  itemImage: {
    width: "100%",
    height: 50,
    borderRadius: "5%",
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
});
