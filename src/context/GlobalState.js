import React, { createContext, useReducer, useContext } from "react";

const CalcContext = createContext();

const { Provider } = CalcContext;

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

const CalcProvider = ({ value = 0, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    operation: "",
    number: 0,
    result: null
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCalcContext = () => {
  return useContext(CalcContext);
};

export { CalcProvider, useCalcContext };
