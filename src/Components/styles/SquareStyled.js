import styled from 'styled-components';

export const Square = styled.div`
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
`;
