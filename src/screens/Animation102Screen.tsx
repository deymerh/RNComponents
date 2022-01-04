import React, { useContext, useRef } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

import { ThemeContext } from '../context/theme/ThemeContext';

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const { theme: { colors } } = useContext(ThemeContext);
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      }
    ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.wrapper}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), { ...styles.purpleBox, backgroundColor: colors.primary }]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
    width: 150,
    height: 150,
    borderRadius: 20
  }
});