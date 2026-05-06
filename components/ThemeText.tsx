import { globalStyles } from "@/style/global-styles";
import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

const ThemeText = ({ children, variant = "h1" }: Props) => {
  return (
    <Text
      numberOfLines={1} //numero de linas
      adjustsFontSizeToFit // toma el tamaño que la pantalla soporta en automatico
      style={[
        { color: "white" },
        variant === "h1" && globalStyles.mainResult,
        variant === "h2" && globalStyles.subResult,
      ]}
    >
      {String(children)}
    </Text>
  );
};

export default ThemeText;
