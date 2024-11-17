import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

interface AppTextInputProps {
  //all the props that TextInput accepts
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  textContentType?:
    | "none"
    | "URL"
    | "addressCity"
    | "addressCityAndState"
    | "addressState"
    | "countryName"
    | "creditCardNumber"
    | "emailAddress"
    | "familyName"
    | "fullStreetAddress"
    | "givenName"
    | "jobTitle"
    | "location"
    | "middleName"
    | "name"
    | "namePrefix"
    | "nameSuffix"
    | "nickname"
    | "organizationName"
    | "postalCode"
    | "streetAddressLine1"
    | "streetAddressLine2"
    | "sublocality"
    | "telephoneNumber"
    | "username"
    | "password"
    | "newPassword"
    | "oneTimeCode";
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
}

const AppTextInput = () => {
  return (
    <View>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});
