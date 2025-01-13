import Groups from "@/src/screens/Groups";
import theme from "@/src/theme";
import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from "@/src/components/Loading";

export default function App() {
const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});



  return (
    <ThemeProvider theme={theme}>
     {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
    
  );
}