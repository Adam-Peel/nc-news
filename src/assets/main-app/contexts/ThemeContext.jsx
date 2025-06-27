import { createContext, useEffect, useState } from "react";

export const ColourThemeContext = createContext();

export const ColourThemeProvider = ({ children }) => {
  const [currentColourTheme, setCurrentColourTheme] = useState("light");

  useEffect(() => {
    document.documentElement.style.setProperty(
      "color-scheme",
      currentColourTheme
    );
  }, [currentColourTheme]);

  return (
    <ColourThemeContext.Provider
      value={{ currentColourTheme, setCurrentColourTheme }}
    >
      {children}
    </ColourThemeContext.Provider>
  );
};
