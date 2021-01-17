import styled, { css } from 'styled-components';

export const HistoryContainer = styled.div`
  width: 300px;
  text-align: center;
  margin-bottom: 20px;
`;
export const HistoryUl = styled.ul`
  display: inline-block;
  padding: 0;
  margin: 0;
`;

export const HistoryLi = styled.li`
  list-style: none;
  text-align: left;
  &:before {
    content: '';
    border-radius: 50%;
    display: inline-block;
    height: 5px;
    width: 5px;
    margin-right: 4px;
    margin-bottom: 1px;
    background: #18206f;
  }

  .btn-move {
    color: #fff;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    &.active {
      font-weight: bold;
      color: #18206f;
    }
    &:hover {
      color: #18206f;
    }
  }
`;
