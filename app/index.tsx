import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/style/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {
  const { formula, builNumber } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      {/**resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        <ThemeText variant="h2">250</ThemeText>
      </View>

      {/**filas botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("c")}
        />
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("del")}
        />
        <CalculatorButton
          label="/"
          color={Colors.orange}
          onPress={() => console.log("/")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => builNumber("7")} />
        <CalculatorButton label="8" onPress={() => builNumber("8")} />
        <CalculatorButton label="9" onPress={() => builNumber("9")} />
        <CalculatorButton
          label="X"
          color={Colors.orange}
          onPress={() => console.log("X")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => builNumber("4")} />
        <CalculatorButton label="5" onPress={() => builNumber("5")} />
        <CalculatorButton label="6" onPress={() => builNumber("6")} />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => console.log("-")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => builNumber("1")} />
        <CalculatorButton label="2" onPress={() => builNumber("2")} />
        <CalculatorButton label="3" onPress={() => builNumber("3")} />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => console.log("+")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          doubleSize
          onPress={() => builNumber("0")}
        />
        <CalculatorButton label="." onPress={() => console.log(".")} />
        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={() => console.log("=")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
