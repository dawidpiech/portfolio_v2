import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  } 


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home changeTheme={themeToggler} />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
