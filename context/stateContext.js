import { useState, createContext } from "react";
export const StateContext = createContext();

export const StateProvider = (props) => {
  const stateContext = {};
  return (
    <StateContext.Provider value={stateContext}>
      {props.children}
    </StateContext.Provider>
  );
};
