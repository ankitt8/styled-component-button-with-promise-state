import "./styles.css";
import ButtonContainer from "./ButtonContainer";
import { ThemeProvider } from "styled-components";
function demoClickHandler() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error"), 1000);
  });
  promise
    .then((responseVal) => console.log(responseVal))
    .catch((rejectVal) => console.error(rejectVal));
  return promise;
}
const theme = {
  colors: {
    green: "#1ECD97",
    gray: "#bbb",
    danger: 'red'
  }
};

export type Theme = typeof theme;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonContainer text="Submit" clickHandler={demoClickHandler} />
    </ThemeProvider>
  );
}
