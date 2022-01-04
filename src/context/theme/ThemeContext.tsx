import React, { createContext, useEffect, useReducer } from 'react';
import { Appearance, AppState } from 'react-native';
import { useColorScheme } from 'react-native';
import { lightheme, ThemeReducer, ThemeState, darktheme } from './ThemeReducer';

interface ThemContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemContextProps);

export const ThemeProvider = ({ children }: any) => {
  const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(
    ThemeReducer,
    (Appearance.getColorScheme() === 'dark')
      ? darktheme
      : lightheme
  );

  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      if (status === 'active') {
        (Appearance.getColorScheme() === 'light')
          ? setLightTheme()
          : setDarkTheme()
      }
    })
  }, []);

  // useEffect(() => {
  //   (colorScheme === 'light')
  // ? setLightTheme()
  // : setDarkTheme()
  // }, [colorScheme]);

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