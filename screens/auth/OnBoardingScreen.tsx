import { Image, Text, View, StyleSheet, I18nManager } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import AppButton from "@/components/global/AppButton";
import { COLORS, FONTS, logoWidth, viewWidth } from "@/constants/theme";
import { IMAGES } from "@/constants";

const slides = [
  {
    title: "ברוכים הבאים לגיינז!",
    description: "את/ה במרחק של כמה קליקים מכניסה לעולם תוספי התזונה לחדר כושר",
    image: IMAGES.onb1,
  },
  {
    title: "עיין במגוון רחב של תוספי מזון",
    description: "חקור מבחר מגוון של תוספי חדר כושר באיכות גבוהה עם גיינז",
    image: IMAGES.onb2,
  },
  {
    title: "משלוח מהיר ואמין",
    description:
      "תיהנו ממשלוח מהיר ואמין עם גיינז. השירות המסור שלנו מבטיח שתוספי התזונה שלך יגיעו במהירות לדלתך",
    image: IMAGES.onb3,
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

  const isLastSlide = activeIndex === slides.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.cContainer]}>
        <Image resizeMode="contain" source={IMAGES.logo} style={styles.logo} />
      </View>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={(index) => setActiveIndex(index)} // Sync activeIndex
        scrollEnabled={false} // Manual scrolling only
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
