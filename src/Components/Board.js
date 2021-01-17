import React from 'react';
import Square from './Square';
import { BoardContainer, BoardRows } from './styles/BoardStyled';

function Board({ board, handleSquareClick, winningSquares }) {
  const renderSquare = position => {
    const isWinningSquare = winningSquares.includes(position);

    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
        isWinningSquare={isWinningSquare}
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
