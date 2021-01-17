import React from 'react';
import { Button } from './styles/ButtonStyled';

function Square({ value, onClick, isWinningSquare }) {
  return (
    <Button
      type="button"
      onClick={onClick}
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-purple' : 'text-peach'
      }`}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </Button>
  );
}

export default Square;
