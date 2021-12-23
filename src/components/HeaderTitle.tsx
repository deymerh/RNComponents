import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../theme/appTheme';

interface Props {
  title: string;
}
export const HeaderTitle = ({ title }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 10, marginBottom: 10 }}>
      <Text style={globalStyles.tilte}>{title}</Text>
    </View>
  )
}