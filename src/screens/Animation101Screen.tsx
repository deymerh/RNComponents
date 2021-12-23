import React from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const { position, opacity, fadeIn, fadeOut, startMovingPosition } = useAnimation();
  return (
    <View style={styles.wrapper}>
      <Animated.View style={{
        ...styles.purpleBox,
        marginBottom: 20,
        opacity,
        transform: [{
          translateY: position
        }]
      }} />
      <Button title="FadeIn" onPress={() => {
        fadeIn();
        startMovingPosition(-100, 300)
      }} />
      <View style={{ marginVertical: 10 }} />
      <Button title="FadeOut" onPress={fadeOut} />
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
    backgroundColor: '#5856d6',
    width: 150,
    height: 150,
    borderRadius: 20
  }
});