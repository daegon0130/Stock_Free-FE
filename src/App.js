import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './config';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Stock from "./pages/Stock";
import Sales from "./pages/Sales";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family:'NanumGothic';
    font-style: normal;
    src: url('./ui/fonts/NanumGothic.ttf');
  }
  @font-face {
    font-family:'NanumGothic';
    font-style: bold;
    font-weight: 400;
    src: url('./ui/fonts/NanumGothicBold.ttf');
  }
  @font-face {
    font-family:'NanumGothic';
    font-style: extra-bold;
    font-weight: 600;
    src: url('./ui/fonts/NanumGothicExtraBold.ttf');
  }
  *{
      box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #f1f1f4;
    font-family:  NanumGothic, "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", Dotum, 돋움,
      sans-serif;
    white-space: nowrap;
  }
`;

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/login" exact={true} component={Login} />
        <Route path="/" exact={true} component={Home} />
        <Route path="/sales" exat={true} component={Sales} />
        <Route path="/stock" exact={true} component={Stock} />
        <Route path="/upload" exact={true} component={Upload} />
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
