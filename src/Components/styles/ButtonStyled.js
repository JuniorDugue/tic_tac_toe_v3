import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  width: 80px;
  height: 80px;
  border-right: 2px solid #000;
  font-size: 2.5rem;
  padding: 0;
  overflow: hidden;
  transition: all 0.2s;
  &:last-child {
    border-right: none;
  }
  color: #644536;

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

  .text-purple {
    color: #18206f;
    font-weight: bolder;
  }

  .text-peach {
    color: #ebebd3;
    font-weight: bolder;
  }
`;

// 18206F
// EBEBD3

// 17255A
// F5E2C8
