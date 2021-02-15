import styled, { css } from "styled-components";

const Container = styled.div`
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 20px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  transition: all 0.4s ease;

  ${Container}:hover & {
    font-size: 1.7em;
  }
`;

const Info = styled.div`
  border-top: 1px solid #cccccc;
`;

const Text = styled.p`
  opacity: 0.7;
  font-weight: bold;
`;

const Text1 = styled(Text)`
  ${({ theme: { color }, accentColor }) => css`
    font-style: italic;
    color: ${color[accentColor]};
  `}
`;

const Text2 = styled(Text)``;

const Caption = styled.p`
  font-size: 12px;
`;

const Styled = { Container, Title, Info, Text1, Text2, Caption };
export default Styled;
