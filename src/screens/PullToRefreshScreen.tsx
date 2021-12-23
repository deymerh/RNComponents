import React, { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';

export const PullToRefreshScreen = () => {
  const [refresing, setRefresing] = useState(false);
  const onRefresh = () => {
    setRefresing(true);
    setTimeout(() => {
      console.log('Hola refresh!');
      setRefresing(false);
    }, 3500);
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refresing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={'#5856D6'}
          colors={['white', 'red', 'blue', 'orange']}
          tintColor={'red'}
          title='Refresing...'
          titleColor={'black'}
        />
      }
    >
      <View style={styles.wrapper}>
        <HeaderTitle title='Pull refresh' />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  }
});