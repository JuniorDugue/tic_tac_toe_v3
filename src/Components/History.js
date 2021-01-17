import React from 'react';
import { HistoryContainer, HistoryUl, HistoryLi } from './styles/HistoryStyled';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <HistoryContainer>
      <HistoryUl>
        {history.map((_, move) => {
          return (
            <HistoryLi key={move}>
              <button
                type="button"
                className={`btn-move ${move === currentMove ? 'active' : ''}`}
                onClick={() => {
                  moveTo(move);
                }}
              >
                {move === 0 ? 'Go to game start' : `Go to move #${move}`}
              </button>
            </HistoryLi>
          );
        })}
      </HistoryUl>
    </HistoryContainer>
  );
};

export default History;
