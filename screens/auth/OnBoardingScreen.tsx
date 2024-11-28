import { Image, Text, View, StyleSheet, Dimensions, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { SwiperFlatList } from "react-native-swiper-flatlist";

import { useRef, useState } from "react";
import AppButton from "@/components/global/AppButton";
import { COLORS, FONTS, logoWidth } from "@/constants/theme";
import { IMAGES, slides } from "@/constants";

const { width } = Dimensions.get("window");

const Welcome = () => {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef<SwiperFlatList>(null);



  const handlePressNext = () => {
    const nextIndex = index + 1;

    if (nextIndex < slides.length) {
      setIndex(nextIndex); // Update state
      swiperRef.current?.scrollToIndex({ index: nextIndex, animated: true }); // Scroll
    } else {
      router.push("/(auth)/login");
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container1}>
        <Image resizeMode="contain" source={IMAGES.logo} style={styles.logo} />
      </View>
      <View style={styles.container2}>
        <SwiperFlatList
          autoplay={false}
          ref={swiperRef}
          index={index}
          onChangeIndex={({ index }) => setIndex(index)}
          showPagination
          PaginationComponent={() => (
            <View style={styles.paginationContainer}>
              {slides.map((_, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.paginationDot,
                    idx === index
                      ? styles.activePaginationDot
                      : styles.inactivePaginationDot,
                  ]}
                />
              ))}
            </View>
          )}
          data={slides}
          renderItem={({ item }) => (
            <View style={[styles.slideContainer]} key={item.title}>
              <Image
                resizeMode="contain"
                source={item.image}
                style={styles.image}
              />
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.container3}>
        <AppButton title="המשך" onPress={handlePressNext} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container3: {
    marginBottom: "10%",
    marginTop: "5%",
    marginHorizontal: "25%",
  },
  slideContainer: {
    width: width,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: "30%",
  },

  logo: {
    width: logoWidth,
    height: 180,
  },

  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    textAlign: "center",
    marginBottom: 10,
    color: COLORS.primary,
  },
  descriptionContainer: {
    alignSelf: "center",
    width: "70%",
    marginBottom: 45,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
    color: "#555",
  },
  dot: {
    backgroundColor: COLORS.gray,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: COLORS.secondary,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },

  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },

  activePaginationDot: {
    backgroundColor: COLORS.secondary,
    transform: [{ scale: 1.2 }], // Makes active dot slightly bigger
  },

  inactivePaginationDot: {
    backgroundColor: COLORS.gray,
    opacity: 0.6,
  },
});

export default Welcome;
