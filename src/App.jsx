import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import RankingList from "./components/RankingList";
import mockedData from "./f1-pilots.json";
import theme from "./config/theme";

const { items } = mockedData;

const GlobalStyles = createGlobalStyle`
  body {
    font-family: sans-serif;
    text-align: center;
    margin: 0 0 15px 0;
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <RankingList items={items} filter="none" title="F1 2020 Standings" />
      </div>
    </ThemeProvider>
  );
}
