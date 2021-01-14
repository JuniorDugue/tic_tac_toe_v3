import React from 'react';
import Square from './Square';
import { BoardContainer, BoardRows } from './styles/BoardStyled';

function Board() {
  return (
    <BoardContainer>
      <BoardRows>
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </BoardRows>
      <BoardRows>
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </BoardRows>
      <BoardRows>
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
      </BoardRows>
    </BoardContainer>
  );
}

export default Board;
