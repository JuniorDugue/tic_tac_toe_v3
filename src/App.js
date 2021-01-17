import React, { useState } from 'react';
import Board from './Components/Board';
import History from './Components/History';
import StatusMessage from './Components/StatusMessage';
import { Container } from './Components/styles/AppContainer';
import { GlobalStyle } from './Components/styles/globalStyles';
import { calculateWinner } from './helpers';

function App() {
  const New_Game = [{ board: Array(9).fill(null), isXNext: true }];

  const [history, setHistory] = useState(New_Game);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  // console.log(history);

  const { winner, winningSquares } = calculateWinner(current.board);
  // console.log(winner);

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

  const onNewGame = () => {
    setHistory(New_Game);
    setCurrentMove(0);
  };

  return (
    <Container>
      <GlobalStyle />
      <h1>
        Tic <span className="tac">Tac</span> Toe
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start new game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </Container>
  );
}

export default App;
