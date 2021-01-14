import React from 'react';
import Board from './Components/Board';
import { GlobalStyle } from './Components/styles/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

export default App;
