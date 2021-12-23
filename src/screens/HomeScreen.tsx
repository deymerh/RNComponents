import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { menuItems } from '../data/MenuItems';
import { Separator } from '../components/Separator';

export const HomeScreen = () => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={<HeaderTitle title='Opciones de menú' />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
  }
});