import 'react-native-gesture-handler';
import React from 'react';
import { Navigation } from './src/navigation/Navigation';

import { ThemeProvider } from './src/context/theme/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors
//   }
// }

const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;