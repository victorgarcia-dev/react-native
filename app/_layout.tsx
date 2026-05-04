import { globalStyles } from "@/style/global-styles";
import { Slot } from "expo-router";
import { StatusBar, View } from "react-native";

const RootLayout = () => {
  return (
    <View style={globalStyles.background}>
      <Slot /> //le dice que todo lo que este fuera del archivo layout es hij0
      <StatusBar /> //muestra los iconos de la app : red wifi, bateria, hora
    </View>
  );
};

export default RootLayout;
