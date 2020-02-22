import React from "react";
import { useCalcContext } from "../context/GlobalState";
import Button from "./Button";

export default function Number({ number }) {
  const [state, dispatch] = useCalcContext();
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
}
