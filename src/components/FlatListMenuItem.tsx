import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

import { Menuitem } from '../interfaces/appInterfaces';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  menuItem: Menuitem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation();
  const { theme: { colors } } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(menuItem.component as any)}
      style={styles.wrapper} activeOpacity={0.3}
    >
      <Icon
        name={menuItem.icon}
        color={colors.text}
        size={15}
      />
      <Text style={{ ...styles.text, color: colors.text }}>{menuItem.name} </Text>
      <View style={{ flex: 1 }} />
      <Icon
        name="chevron-forward-outline"
        color={colors.text}
        size={15}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 5
  }
});