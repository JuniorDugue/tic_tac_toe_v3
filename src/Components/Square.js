import React from 'react';
import { Button } from './styles/ButtonStyled';

function Square({ value, onClick, isWinningSquare }) {
  return (
    <Button
      type="button"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </Button>
  );
}

export default Square;
