import { useContext } from "react";
import themeContext from "../Contexts/ThemeContext";
import { themeContext2 } from "../Contexts/ThemeContext";

const stylePattern = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },

  yellow: {
    backgroundColor: "yellow",
    color: "green",
  },
  green: {
    backgroundColor: "green",
    color: "yellow",
  },
};

export function ChildComponentThemeCheck() {
  const { theme, setTheme } = useContext(themeContext);
  const { theme2, setTheme2 } = useContext(themeContext2);

  return (
    <section>
      <article style={stylePattern[theme]}>
        <h2>ARTICLE 1</h2>
        <p>I am checking the theme change over here. </p>
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          CHANGE THEME FOR ALL
        </button>
      </article>

      <article style={stylePattern[theme2]}>
        <h2>ARTICLE 2</h2>
        <p>I am checking the theme change over here. </p>
        <button
          onClick={() => {
            setTheme2(theme2 === "yellow" ? "green" : "yellow");
          }}
        >
          CHANGE THEME FOR ALL
        </button>
      </article>
    </section>
  );
}

export function ChildComponentNoThemeCheck() {
  return (
    <section style={{ backgroundColor: "blue", color: "yellow" }}>
      <h2>NO THEME CHANGE HERE</h2>
      <p>I am not changing the theme here</p>
    </section>
  );
}

export default function ThemeProvider({
  theme,
  children,
  setTheme,
  theme2,
  setTheme2,
}) {
  return (
    <themeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <themeContext2.Provider value={{ theme2: theme2, setTheme2: setTheme2 }}>
        {children}
      </themeContext2.Provider>
    </themeContext.Provider>
  );
}
