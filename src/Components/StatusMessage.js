import React from 'react';
import { Status } from './styles/StatusMessageStyled';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(element => element !== null);
  return (
    <Status>
      <h3>
        {winner && (
          <>
            Good Game, the winner is{' '}
            <span className={winner === 'X' ? 'text-purple' : 'text-peach'}>
              {winner}
            </span>
          </>
        )}{' '}
        {!winner && !noMovesLeft && (
          <>
            Next player is{' '}
            <span className={current.isXNext ? 'text-purple' : 'text-peach'}>
              {current.isXNext ? 'X' : 'O'}{' '}
            </span>
          </>
        )}
        {!winner && noMovesLeft && (
          <>
            Good Game, <span className="text-purple">X</span> and{' '}
            <span className="text-peach">O</span> are tied!
          </>
        )}
      </h3>
    </Status>
  );
};

export default StatusMessage;
