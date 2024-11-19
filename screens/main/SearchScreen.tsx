import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories, ICONS } from "@/constants";
import { COLORS } from "@/constants/theme";
import DiagonalBox from "@/components/global/DiagonlBox";

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
      <View>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <DiagonalBox height={50} width={185} text={item.title} />
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
});
