import Players from "@/src/screens/Players";
import { ThemeProvider } from "styled-components";
import theme from "../../src/theme/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@/src/components/Loading";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="trasnparent"
        translucent
      />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
