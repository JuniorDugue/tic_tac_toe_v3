import React from "react";
import Square from "./Square";
import { BoardContainer, BoardRows } from "./styles/BoardStyled";

function Board() {
  return (
    <BoardContainer>
      <BoardRows>
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </BoardRows>
      <BoardRows>
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </BoardRows>
      <BoardRows>
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </BoardRows>
    </BoardContainer>
  );
}

export default Board;
