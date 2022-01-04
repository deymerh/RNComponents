import React, { createContext, useReducer } from 'react';
import { lightheme, ThemeReducer, ThemeState } from './ThemeReducer';

interface ThemContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemContextProps);

export const ThemeProvider = ({ children }: any) => {
  const [theme, dispatch] = useReducer(ThemeReducer, lightheme);
  const setLightTheme = () => {
    dispatch({ type: 'set_light_theme' });
  };
  const setDarkTheme = () => {
    dispatch({ type: 'set_dark_theme' });
  };
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