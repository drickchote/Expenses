import React from "react";
import { ThemeProvider } from "styled-components/native";
import BottomNavigation from "./src/Navigators/BottomNavigation";
import theme from "./src/shared/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation />
    </ThemeProvider>
  );
}
