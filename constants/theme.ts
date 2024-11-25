import { Dimensions } from "react-native";

export const COLORS = {
    primary: "#111821",
    secondary: "#118B8D",
    third: "#F26B3B",
    fourth: "#F26664",
    white: "#FFFFFF",
    gray: "rgba(16, 24, 33, 0.25)",
    grayBg: "#E7E8E9",
    black: "#000000",
    themeGray:"rgba(17, 24, 33, 0.11)",
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes

    //headings
    h1: 32,
    h2: 24,
    h3: 16,
    h4: 10,

    //body fonts
    body1: 24,
    body2: 18,
    body3: 14,

    //body light
    body1_light: 20,
    body2_light: 16,
    body3_light: 12,


    //button
    button: 22,
}

export const FONTS = {
    bold: "OSC-Bold",
    light: "OSC-Light",
    regular: "OSC-Regular",
    semiBold: "OSC-SemiBold",
    boldItalic: "OSC-BoldItalic",
    italic: "OSC-Italic",
    lightItalic: "OSC-LightItalic",
    semiBoldItalic: "OSC-SemiBoldItalic",
}

export const { width,height } = Dimensions.get("window");
export const logoWidth = width * 0.5;
export const viewWidth = width * 0.75;