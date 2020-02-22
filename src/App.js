import React, { useReducer } from "react";
import "./styles.css";
import styled from "styled-components";

import { Number } from "./components/Number";
import Display from "./components/Display";
import Operands from "./components/Operands";

const Container = styled.div`
  font-family: "Consolas", serif;
  font-size: 24px;
  box-sizing: border-box;
`;

const Header = styled.h1`
  color: #9673ff;

  &:hover {
    color: rebeccapurple;
  }
`;

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT_NUMBER":
      return {
        ...state,
        number: parseFloat(state.number + "" + action.payload, 10)
      };
    case "ADD":
      return {
        ...state,
        result: state.result ? state.result + state.number : state.number,
        number: 0,
        operation: "+"
      };
    case "EQUALS":
      return {
        ...state,
        result: state.result + state.number,
        number: 0,
        operation: ""
      };
    case "CLEAR":
      return {
        result: null,
        number: 0,
        operation: ""
      };
    default:
      throw new Error();
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    operation: "",
    number: 0,
    result: null
  });

  return (
    <div className="App">
      <Container>
        <Header>Calculator</Header>
        <Display {...state} />
        {numbers.map((number, index) => (
          <Number dispatch={dispatch} number={number} key={index} />
        ))}
        <div />
        <Operands dispatch={dispatch} />
        <div>{state.result}</div>
      </Container>
    </div>
  );
}
