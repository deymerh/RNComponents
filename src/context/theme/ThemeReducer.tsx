import { Theme } from '@react-navigation/native';

type ThemeAction =
  | { type: 'set_light_theme' }
  | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string
}

export const lightheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.6)',
  colors: {
    primary: '#084F6A',
    background: 'white',
    card: 'green',
    text: 'black',
    border: 'orange',
    notification: 'teal',
  },
}
export const darktheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(255, 255, 255, 0.6)',
  colors: {
    primary: '#084F6A',
    background: 'black',
    card: 'black',
    text: 'white',
    border: 'black',
    notification: 'teal',
  },
}
export const ThemeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return { ...lightheme }
    case 'set_dark_theme':
      return { ...darktheme }
    default:
      return state;
  }
}