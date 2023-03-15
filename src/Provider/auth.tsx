import React from "react";

export interface MyContext {
  windowWidth: number;
  windowHeight: number;
}

export const Context = React.createContext<MyContext>({
  windowWidth: 0,
  windowHeight: 0,
});
