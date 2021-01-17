import React, { useState } from 'react';
import Board from './Components/Board';
import History from './Components/History';
import { Container } from './Components/styles/AppContainer';
import { GlobalStyle } from './Components/styles/globalStyles';
import { calculateWinner } from './helpers';

function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  // const [isXNext, setIsXNext] = useState(false);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  console.log(history);
  const winner = calculateWinner(current.board);
  console.log(winner);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <Container>
      <GlobalStyle />
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </Container>
  );
}

export default App;
