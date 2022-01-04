import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {
  const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext);
  return (
    <View style={{ padding: 20 }}>
      <HeaderTitle title='Themes' />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
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
            Dark
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setLightTheme}
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
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
            Light
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
