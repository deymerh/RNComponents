import React, { createContext } from 'react';

interface ThemContextProps {
  theme: any;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemContextProps);

export const ThemeProvider = ({ children }: any) => {
  const theme = {};
  const setDarkTheme = () => { console.log('setDarkTheme') };
  const setLightTheme = () => { console.log('setLightTheme') };
  return (
    <ThemeContext.Provider value={{
      theme,
      setDarkTheme,
      setLightTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}