import { useState, createContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  function toggleMode() {
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
