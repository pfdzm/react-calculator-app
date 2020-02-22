import React from "react";
import styled from "styled-components";

import { useCalcContext } from "../context/GlobalState";

const Div = styled.div`
  font-size: 2rem;
  padding: 1rem;
  border: 1px solid palevioletred;
  width: 18rem;
  margin: 0 auto;
  background-color: palegoldenrod;
  position: relative;
  overflow: hidden;
`;

const Operation = styled.span`
  position: absolute;
  left: 2px;
`;

export default function Display({ operation }) {
  const [{ number, result }, dispatch] = useCalcContext();
  return (
    <div>
      <Div>
        <Operation>{operation}</Operation>
        <span>{number}</span>
      </Div>
      <div>{result}</div>
    </div>
  );
}
