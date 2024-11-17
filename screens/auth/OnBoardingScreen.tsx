import { Image, Text, View, StyleSheet, I18nManager } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import AppButton from "@/components/global/AppButton";
import { COLORS, FONTS, logoWidth, viewWidth } from "@/constants/theme";

const slides = [
  {
    title: "Welcome to React Native",
    description: "This is a React Native app",
    image: require("../../assets/images/onb1.png"),
  },
  {
    title: "Learn Mobile Development",
    description: "React Native lets you build mobile apps using JavaScript.",
    image: require("../../assets/images/onb1.png"),
  },
  {
    title: "Start Building Amazing Apps",
    description:
      "React Native is powerful and scalable for all your app needs.",
    image: require("../../assets/images/onb1.png"),
  },
];

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const onPressButton = () => {
    if (isLastSlide) {
      router.push("/(auth)/login");
    } else {
      swiperRef.current?.scrollBy(1);
    }
  };

  console.log("rtl", I18nManager.isRTL);
  const isRTL = I18nManager.isRTL;

  const isLastSlide = activeIndex === slides.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.cContainer]}>
        <Image
          resizeMode="contain"
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      <Swiper
        ref={swiperRef}
        index={activeIndex}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {slides.map((item, index) => (
          <View style={[styles.cContainer, styles.slide]} key={index}>
            <Image
              resizeMode="contain"
              source={item.image}
              style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </Swiper>

      <View style={[styles.cContainer, styles.container3]}>
        <AppButton title="hello" onPress={onPressButton} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: "30%",
  },
  container3: {
    width: viewWidth,

    marginBottom: 20,
  },
  cContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: logoWidth,
    height: 180,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 50,
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
  description: {
    fontSize: 16,
    textAlign: "center",
    width: "60%",
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
});

export default Welcome;
