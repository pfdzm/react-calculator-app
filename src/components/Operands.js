import React from "react";

import styled from "styled-components";

const Button = styled.button`
  padding: 1rem;
  border-radius: 5px;
  font-size: 32px;
`;

export default function OperationButtons({ children, dispatch }) {
  return (
    <div>
      <Button
        onClick={() =>
          dispatch({
            type: "ADD"
          })
        }
      >
        +
      </Button>
      <Button
        onClick={() => {
          dispatch({
            type: "EQUALS"
          });
        }}
      >
        =
      </Button>
      <Button
        onClick={() => {
          dispatch({
            type: "CLEAR"
          });
        }}
      >
        CLEAR
      </Button>
    </div>
  );
}
