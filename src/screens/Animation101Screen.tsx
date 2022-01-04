import React, { useContext } from 'react';
import { Animated, Button, StyleSheet, View, StyleProp } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const { position, opacity, fadeIn, fadeOut, startMovingPosition } = useAnimation();
  const { theme: { colors } } = useContext(ThemeContext);
  return (
    <View style={styles.wrapper}>
      <Animated.View style={{
        ...styles.purpleBox,
        marginBottom: 20,
        backgroundColor: colors.primary,
        opacity,
        transform: [{
          translateY: position
        }]
      }} />
      <Button
        color={colors.primary}
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100, 300);
        }} />
      <View style={{ marginVertical: 10 }} />
      <Button
        color={colors.primary}
        title="FadeOut"
        onPress={fadeOut} />
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