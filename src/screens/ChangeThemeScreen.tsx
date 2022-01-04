import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {
  const { setDarkTheme } = useContext(ThemeContext);
  return (
    <View style={{ padding: 20 }}>
      <HeaderTitle title='Themes' />
      <TouchableOpacity
        onPress={setDarkTheme}
        activeOpacity={0.8}
        style={{
          backgroundColor: '#5856D6',
          borderRadius: 20,
          justifyContent: 'center',
          width: 150,
          height: 40
        }}
      >
        <Text style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 18
        }}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  )
}
