import {
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Welcome to React Native",
      description: "This is a React Native app",
      // image: require("./assets/slide1.png"), // Replace with your images
    },
    {
      title: "Learn Mobile Development",
      description: "React Native lets you build mobile apps using JavaScript.",
      // image: require("./assets/slide2.png"), // Replace with your images
    },
    {
      title: "Start Building Amazing Apps",
      description:
        "React Native is powerful and scalable for all your app needs.",
      // image: require("./assets/slide3.png"), // Replace with your images
    },
  ];

  const isLastSlide = activeIndex === slides.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => router.replace("/(auth)/login")}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        index={activeIndex}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {slides.map((item, index) => (
          <View style={styles.slide} key={index}>
            {/* Uncomment and replace with actual image paths */}
            {/* <Image
              resizeMode="contain"
              source={item.image}
              style={styles.image}
            /> */}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </Swiper>

      <Button
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() => {
          if (isLastSlide) {
            router.replace("/(auth)/login");
          } else {
            swiperRef.current?.scrollBy(1);
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  skipButton: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  skipText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  dot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#E2E8F0",
    borderRadius: 2,
  },
  activeDot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#0286FF",
    borderRadius: 2,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  description: {
    color: "#858585",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    marginHorizontal: 20,
    fontWeight: "600",
  },
});

export default Welcome;
