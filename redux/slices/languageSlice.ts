import i18n from "@/i18n";
import { createSlice } from "@reduxjs/toolkit";
import { I18nManager } from "react-native";

export interface LanguageState {
  language: string;
  isRTL: boolean;
}

const initialState: LanguageState = {
  language: "en",
  isRTL: false,
};

const rtlLanguages = ["ar", "ur", "he"]; // List of RTL languages

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      const selectedLanguage = action.payload;
      state.language = selectedLanguage;
      state.isRTL = rtlLanguages.includes(selectedLanguage);

      // Update i18n language
      i18n.changeLanguage(selectedLanguage);

      // Update layout direction
      I18nManager.allowRTL(state.isRTL);
          I18nManager.forceRTL(state.isRTL);
          
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
