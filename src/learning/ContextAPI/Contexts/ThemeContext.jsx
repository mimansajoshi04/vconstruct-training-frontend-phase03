import { createContext } from "react";

const themeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

export const themeContext2 = createContext({
  theme: "yellow",
  setTheme2: () => {},
});

export default themeContext;
