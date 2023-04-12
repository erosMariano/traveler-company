import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./global";
import { LightTheme } from "./styles/theme/light";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

interface ThemePageProps {
  theme: "light" | "dark";
}
function App() {

  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
