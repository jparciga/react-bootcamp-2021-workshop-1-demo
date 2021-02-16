import React from "react";
import mockedData from "./f1-pilots.json";
import "./global.css";

const Card = ({ title, text1, text2 }) => (
  <div className="person-container">
    <h2>{title}</h2>
    <div className="person-container__info">
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  </div>
);

export default function App() {
  const items = [];

  mockedData.items.forEach(({ name, rank, country, team, points }) => {
    items.push(
      <Card
        title={`${rank}. ${name} ${country.flag}`}
        text1={team}
        text2={`Points: ${points}`}
      />
    );
  });

  return <div className="App">{items}</div>;
}
