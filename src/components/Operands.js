import React from "react";
import { useCalcContext } from "../context/GlobalState";
import Button from "./Button";

export default function OperationButtons() {
  const [state, dispatch] = useCalcContext();
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
