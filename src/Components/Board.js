import React, { useState } from 'react';
import Square from './Square';
import { BoardContainer, BoardRows } from './styles/BoardStyled';

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const handleSquareClick = position => {
    if (board[position]) {
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

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <BoardContainer>
      <BoardRows>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRows>
      <BoardRows>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRows>
      <BoardRows>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRows>
    </BoardContainer>
  );
}

export default Board;
