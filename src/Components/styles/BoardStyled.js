import styled from 'styled-components';

export const BoardContainer = styled.div`
  /* outline: 1px solid red; */
`;

export const BoardRows = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #000;
  &::last-child {
    border-bottom: none;
  }
`;
