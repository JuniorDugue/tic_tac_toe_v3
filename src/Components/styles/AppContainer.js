import styled from 'styled-components';

export const Container = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(248, 245, 245);
  background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
  height: 100vh;

  .tac {
    color: #18206f;
  }

  .btn-reset {
    font-size: 0.8rem;
    color: #fff;
    border-radius: 15px;
    padding: 12px 18px;
    margin-top: 35px;
    margin-bottom: 20px;
    transition: all 0.2s;
    cursor: pointer;
    background: #000;
    outline: none;
    border: none;
    /* box-shadow: 0px 0px 0px 1px #ebebd3; */
    &.active {
      background: #ebebd3;
      box-shadow: none;
      color: #000;
    }
  }
`;
