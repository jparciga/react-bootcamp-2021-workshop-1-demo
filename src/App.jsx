import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import RankingList from "./components/RankingList";
import theme from "./config/theme";
import mockedData from "./f1-pilots.json";

const { items } = mockedData;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <div className="app">
          <RankingList title="F1 2020 standings" items={items} filter="none" />
        </div>
      </ThemeProvider>
    </>
  );
}
