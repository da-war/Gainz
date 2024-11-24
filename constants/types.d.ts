import { ImageSourcePropType } from "react-native";

declare interface DiagonalBoxProps{
    colorTopLeft?: string;
    colorBottomRight?: string;
    height?: number;
    width?: number;
    text?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;

}

declare interface AppButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  titleColor?: string;
  btnColor?: string;
}

declare interface FeedbackComponentProps {
  title?: string;
  rating?: number;
  review?: string; 
  date?: string;
}

declare interface DropDownDetailsProps {
  title?: string;
  details?: string;
}

declare interface Slide {
  title: string;
  description: string;
  image:ImageSourcePropType,
}