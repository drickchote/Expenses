import { ThemeProvider } from "styled-components";
import BottomNavigation from "./src/Navigators/BottomNavigation";
import theme from "./src/shared/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation />
    </ThemeProvider>
  );
}
