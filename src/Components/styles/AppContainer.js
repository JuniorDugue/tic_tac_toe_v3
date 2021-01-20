import styled from 'styled-components';

export const Container = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(248, 245, 245);
  height: 100vh;

  h1 {
    color: #ebebd3;
  }
  .middleText {
    color: #18206f;
  }

  .btn-reset {
    font-size: 0.8rem;
    color: #ebebd3;
    border-radius: 15px;
    padding: 12px 18px;
    margin-top: 35px;
    margin-bottom: 20px;
    transition: all 0.2s;
    cursor: pointer;
    background: #18206f;
    outline: none;
    border: none;
    &.active {
      background: #ebebd3;
      box-shadow: none;
      color: #18206f;
    }
  }

  .bgCircles {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 100%;
    z-index: -1;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    &:before {
      background-color: #ebebd3;
      right: -75px;
      bottom: -75px;
      @media screen and (min-width: 476px) {
        width: 220px;
        height: 220px;
        right: -110px;
        bottom: -110px;
      }
    }

    &:after {
      background-color: #18206f;
      top: -75px;
      left: -75px;
      @media screen and (min-width: 476px) {
        width: 220px;
        height: 220px;
        top: -110px;
        left: -110px;
      }
    }
  }
`;
