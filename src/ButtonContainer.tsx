import React, { useState } from "react";
import { StyledButton } from "./styled-components/Button.styled";
interface IButtonProps {
  text: string;
  clickHandler: () => Promise<any>;
}
export default function ButtonContainer({ text, clickHandler }: IButtonProps): JSX.Element {
  const [promiseStates, setPromiseStates] = useState({
    loading: false,
    rejected: false,
    resolved: false
  });
  const showSubmit = !(promiseStates.loading || promiseStates.rejected || promiseStates.resolved);
  const handleClick = () => {
    if (!showSubmit) return;
    const promise = clickHandler();

    try {
      setPromiseStates({
        loading: true,
        rejected: false,
        resolved: false
      });
      promise.then(
        function promiseSuccess() {
          setPromiseStates({
            loading: false,
            rejected: false,
            resolved: true
          });
        },
        function promiseFailure() {
          setPromiseStates({
            loading: false,
            rejected: true,
            resolved: false
          });
        }
      );
    } catch (e) {
      console.error(e);
      throw new Error("Something went wrong");
    }
  };
  return <StyledButton promiseStates={promiseStates} onClick={handleClick}>{showSubmit && text}</StyledButton>
}
