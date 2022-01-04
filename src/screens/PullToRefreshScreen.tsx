import React, { useContext, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const PullToRefreshScreen = () => {
  const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext);
  const [refresing, setRefresing] = useState(false);
  const [data, setData] = useState<string>()
  const onRefresh = () => {
    setRefresing(true);
    setTimeout(() => {
      setRefresing(false);
      setData('Hola Mundo!')
    }, 3500);
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refresing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={dividerColor}
          colors={[colors.text]}
          tintColor={dark ? 'white' : 'black'} // Solo para IOS
          title='Refresing...'
          titleColor={'black'}
        />
      }
    >
      <View style={styles.wrapper}>
        <HeaderTitle title='Pull refresh' />
        {
          data && <HeaderTitle title={data} />
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  }
});