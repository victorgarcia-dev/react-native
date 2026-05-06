import { Colors } from "@/constants/theme";
import { globalStyles } from "@/style/global-styles";
import * as Haptics from "expo-haptics";
import { Pressable, Text } from "react-native";
interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  onPress?: () => void;
  doubleSize?: boolean;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  doubleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={() => {
        Haptics.selectionAsync(); //hace que tenga esa sensacion de vibracion al tocar el boton
        onPress?.();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
