import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: any) => {
  const [mode, setMode] = useState<string | any>(localStorage.getItem("mode"));

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={[mode, setMode]}>
      {children}
    </ThemeContext.Provider>
  );
};
