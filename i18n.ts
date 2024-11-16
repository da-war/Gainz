import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import en from './locales/en.json';
import ar from './locales/ar.json';
import he from './locales/he.json';

// Initialize i18n
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: { translation: en },
    ar: { translation: ar },
    he: { translation: he },
  },
  lng: 'he', // Default language
  fallbackLng: 'he', // Fallback if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
