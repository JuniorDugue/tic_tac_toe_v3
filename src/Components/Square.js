import React from 'react';
import { Button } from './styles/ButtonStyled';

function Square({ value, onClick }) {
  // console.log(value)
  console.log('square rerender')
  return (
    <Button type="button" onClick={onClick}>
      {value}
    </Button>
  );
}

export default Square;
