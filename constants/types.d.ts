import { ImageSourcePropType, ViewStyle } from "react-native";

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

declare interface ProductListingProps {
  discount: number;
  price: number;
  title: string;
  image: ImageSourcePropType;
  rating?: number;
  totalFeedbacks?: number;
  afterDiscount?: number;
  onPress: () => void;
  onPressAddToCart: () => void;
  isFav?: boolean;
  onPressFav?: () => void;
  style?: ViewStyle;
}

declare interface CategorySelectorProps {
  title: string;
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}