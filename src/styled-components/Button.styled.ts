import styled, { css, keyframes } from "styled-components";
type Props = any;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledButton = styled.button<Props>`
  outline: none;
  width: 100px;
  height: 40px;
  border-radius: 40px;
  background: #fff;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.green};
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: white;
    background: ${({theme}) => theme.colors.green};
  }


  ${(props) => props.promiseStates.loading && css`
    width: 40px;
    border-color: ${(props) => props.theme.colors.gray};
    border-width: 3px;
    font-size: 0;
    border-left-color: ${(props) => props.theme.colors.green};
    animation: ${rotate} 2s 0.25s linear infinite;
  `}
  
  ${(props) => props.promiseStates.resolved && css`
    width: 100px;
    animation: none !important;
    font-size: 18px;
    color: white;
    background: ${(props) => props.theme.colors.green};
    &:after {
      content: '\\2713';
    }
    `
  }
  ${(props) => props.promiseStates.rejected && css`
    animation: none !important;
    font-size: 18px;
    color: white;
    // background: ${(props) => props.theme.colors.danger};
    background: none;
    // border-color: ${(props) => props.theme.colors.danger};
    border: none;
    &:after {
      content: '\\274C';
    }
    &:hover {
      color: white;
      // background: ${({theme}) => theme.colors.danger};
      background: none;
    }
  `}
`;
export { StyledButton };
