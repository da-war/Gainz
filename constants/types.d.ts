
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