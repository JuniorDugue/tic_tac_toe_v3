import React, { useState } from 'react';
import Board from './Components/Board';
import { Container } from './Components/styles/AppContainer';
import { GlobalStyle } from './Components/styles/globalStyles';
import { calculateWinner } from './helpers';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);
  console.log(winner);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }

        return square;
      });
    });
    setIsXNext(prev => !prev);
  };

  return (
    <Container>
      <GlobalStyle />
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </Container>
  );
}

export default App;
