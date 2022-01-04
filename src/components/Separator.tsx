import React, { useContext } from 'react';
import { View } from 'react-native';

import { ThemeContext } from '../context/theme/ThemeContext';

export const Separator = () => {
  const { theme: { dividerColor } } = useContext(ThemeContext)
  return (
    <View style={{
      borderBottomColor: dividerColor,
      borderBottomWidth: 1,
      marginVertical: 5
    }} />
  )
}
