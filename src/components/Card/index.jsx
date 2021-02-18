import React from "react";
import Styled from "./styled";

const Card = ({ title, text1, text2, accentColor }) => (
  <Styled.Container>
    <Styled.Title>{title}</Styled.Title>
    <Styled.Info>
      <Styled.Text1 accentColor={accentColor}>{text1}</Styled.Text1>
      <Styled.Text2>{text2}</Styled.Text2>
    </Styled.Info>
  </Styled.Container>
);

export default Card;
