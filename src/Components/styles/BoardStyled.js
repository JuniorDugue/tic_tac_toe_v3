import styled, { css } from 'styled-components';

export const BoardContainer = styled.div``;

export const BoardRows = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #fff;
  &:last-child {
    border-bottom: none;
  }

  .square {
    width: 80px;
    height: 80px;
    border-right: 2px solid #fff;
    font-size: 2.5rem;
    padding: 0;
    overflow: hidden;
    transition: all 0.2s;
    &:last-child {
      border-right: none;
    }
    &.winning {
      animation: scaleText 1.4s infinite;
      @keyframes scaleText {
        0% {
          transform: 2.5rem;
        }
        50% {
          font-size: 3.5rem;
        }
        100% {
          font-size: 2.5rem;
        }
      }
    }
  }
`;
