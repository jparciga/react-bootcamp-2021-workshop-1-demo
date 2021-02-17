import styled from "styled-components";

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
  opacity: 0.8;
  font-weight: bold;

  &:first-child {
    font-style: italic;
  }
`;

const Text1 = styled(Text)`
  text-decoration: underline;
  color: ${({ theme: { color }, accentColor }) => color[accentColor]};
`;

const Text2 = styled(Text)`
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const Styled = { Container, Title, Info, Text1, Text2 };
export default Styled;
