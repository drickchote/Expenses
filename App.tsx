import { ThemeProvider } from "styled-components";
import BottomNavigation from "./src/Navigators/BottomNavigation";
import theme from "./src/theme/main";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <BottomNavigation/>
    </ThemeProvider>
  );
}
