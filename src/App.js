import styled, { createGlobalStyle } from "styled-components";
import Pictures from './Pictures'

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
*, *::after, *::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #F1F5F9;
}

html {
  font-size: 12px;
}

@media screen and (min-width: 1024px) {
  html {
    font-size: 18px;
  }
}
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Pictures />
    </Container>
  );
};

export default App;
