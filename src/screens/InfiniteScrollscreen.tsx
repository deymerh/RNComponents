import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';

import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const InfiniteScrollScreen = () => {
  const { theme: { colors } } = useContext(ThemeContext);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  }
  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    )
    // <Image
    //   source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
    //   style={{
    //     width: '100%',
    //     height: 400
    //   }}
    // />
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={(item, index) => (item + index).toString()}
        ListHeaderComponent={() => (
          <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title='Infitive Scroll' />
          </View>
        )}
        renderItem={({ item }) => renderItem(item)}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={{ alignItems: 'center', justifyContent: 'center', height: 100 }}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  renderItem: {
    marginVertical: 5,
    color: 'black'
  }
});