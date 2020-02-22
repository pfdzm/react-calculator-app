import React from "react";
import "./styles.css";
import styled from "styled-components";

import { Number } from "./components/Number";
import Display from "./components/Display";
import Operands from "./components/Operands";

import { CalcProvider } from "./context/GlobalState";

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

export default function App() {
  return (
    <CalcProvider>
      <div className="App">
        <Container>
          <Header>Calculator</Header>
          <Display />
          {numbers.map((number, index) => (
            <Number number={number} key={index} />
          ))}
          <Operands />
        </Container>
      </div>
    </CalcProvider>
  );
}
