import React from "react";
import Card from "../Card";
import { getVisibleItems } from "../../utils/ranking";
import Styled from "./styled";

const RankingList = ({ title, items, filter }) => {
  const visibleItems = getVisibleItems(items, filter);

  return (
    <Styled.Container>
      <Styled.TitleBar>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle>{visibleItems.length} pilots</Styled.Subtitle>
      </Styled.TitleBar>
      <Styled.List>
        {visibleItems.map(({ id, rank, name, team, points, country }) => (
          <Card
            key={id}
            title={`${rank}. ${name} ${country?.flag}`}
            text1={team}
            text2={`Points ${points}`}
            accentColor={team}
          />
        ))}
      </Styled.List>
    </Styled.Container>
  );
};

export default RankingList;
