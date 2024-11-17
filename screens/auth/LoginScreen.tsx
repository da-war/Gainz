import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTS, logoWidth, SIZES, width } from "@/constants/theme";
import AppButton from "@/components/global/AppButton";

const LoginScreen = () => {
  const [isAlreadyHaveAccount, setIsAlreadyHaveAccount] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>

      <View style={styles.midContainer}>
        <Text style={styles.label}>אנא הזן את מספר הטלפון שלך</Text>
        <TextInput
          placeholder="+927 - 123 - 4567"
          placeholderTextColor={COLORS.gray}
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        {isAlreadyHaveAccount ? (
          <Text style={styles.label2}>כבר יש לך חשבון? להתחבר</Text>
        ) : (
          <Text style={styles.label2}>אין לך חשבון? להירשם</Text>
        )}
      </View>

      <KeyboardAvoidingView style={{ marginTop: 100 }}>
        <AppButton
          title="המשך"
          onPress={() => console.log("login")}
          style={{ marginTop: 20, width: "65%", alignSelf: "center" }}
        />
        {isAlreadyHaveAccount ? (
          <Text
            onPress={() => setIsAlreadyHaveAccount(!isAlreadyHaveAccount)}
            style={styles.label2}
          >
            עבור לעכשיו
          </Text>
        ) : (
          <Text
            onPress={() => setIsAlreadyHaveAccount(!isAlreadyHaveAccount)}
            style={styles.label2}
          >
            עבור להרשמה
          </Text>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: logoWidth,
    height: 180,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  label: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: SIZES.h2,
    textAlign: Platform.OS === "ios" ? "left" : "right",
  },
  label2: {
    marginTop: 10,
    textAlign: "center",
    color: COLORS.primary,
  },
  midContainer: {},
  input: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    color: COLORS.primary,
    fontFamily: FONTS.regular,
    fontSize: SIZES.h2,
    padding: 5,
    marginTop: 15,
  },
});
