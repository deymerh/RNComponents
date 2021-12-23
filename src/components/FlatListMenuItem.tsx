import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

import { Menuitem } from '../interfaces/appInterfaces';

interface Props {
  menuItem: Menuitem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(menuItem.component as any)}
      style={styles.wrapper} activeOpacity={0.3}
    >
      <Icon
        name={menuItem.icon}
        color="#5856D6"
        size={15}
      />
      <Text style={styles.text}>{menuItem.name} </Text>
      <View style={{ flex: 1 }} />
      <Icon
        name="chevron-forward-outline"
        color="#5856D6"
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
    color: 'black',
    marginLeft: 5
  }
});