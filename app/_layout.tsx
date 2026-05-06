import { globalStyles } from "@/style/global-styles";
import { Slot } from "expo-router";
import { StatusBar, View } from "react-native";

const RootLayout = () => {
  return (
    <View style={globalStyles.background}>
      <Slot />
      {/* le dice que todo lo que este fuera del archivo layout es hijo */}
      <StatusBar />
      {/* muestra los iconos de la app */}
    </View>
  );
};

export default RootLayout;
