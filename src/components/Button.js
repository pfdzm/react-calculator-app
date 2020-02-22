import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
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
    cursor: pointer;
  }
`;

export default function Button(props, children) {
  return <StyledButton {...props} {...children} />;
}
