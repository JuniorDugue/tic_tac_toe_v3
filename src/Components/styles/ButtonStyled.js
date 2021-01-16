import styled from 'styled-components';

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
`;

// 18206F
// EBEBD3


// 17255A
// F5E2C8