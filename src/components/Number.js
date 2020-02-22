import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 24px;
  font-family: monospace;
  font-weight: bold;
  color: #9673ff;
  border: 2px solid #9673ff;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  background-color: unset;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const Number = ({ number, dispatch }) => {
  return (
    <Button
      onClick={() =>
        dispatch({
          type: "INPUT_NUMBER",
          payload: number
        })
      }
      data-value={number}
    >
      {number}
    </Button>
  );
};
