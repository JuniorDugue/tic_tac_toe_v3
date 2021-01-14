import React from 'react';
import Board from './Components/Board';
import { Container } from './Components/styles/AppContainer';
import { GlobalStyle } from './Components/styles/globalStyles';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <h1>Tic Tac Toe</h1>
      <Board />
    </Container>
  );
}

export default App;
