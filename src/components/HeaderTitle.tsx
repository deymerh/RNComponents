import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';
import { globalStyles } from '../theme/appTheme';

interface Props {
  title: string;
}
export const HeaderTitle = ({ title }: Props) => {
  const { top } = useSafeAreaInsets();
  const { theme: { colors } } = useContext(ThemeContext);
  return (
    <View style={{ marginTop: top + 10, marginBottom: 10 }}>
      <Text style={{ ...globalStyles.tilte, color: colors.text }}>{title}</Text>
    </View>
  )
}