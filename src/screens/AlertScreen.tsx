import React, { useContext } from 'react'
import { Alert, View, Button, StyleSheet } from 'react-native';

import prompt from 'react-native-prompt-android';

import { globalStyles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

export const AlertScreen = () => {
  const { theme: { colors } } = useContext(ThemeContext);
  const showAlert = () => {
    Alert.alert(
      "Title",
      "Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      {
        cancelable: true,
        onDismiss: () => console.log("OnDismiss")
      }
    );
  }
  const showPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder'
      }
    );
  }
  return (
    <View style={[globalStyles.paddinGlobal, { ...styles.container, backgroundColor: colors.background }]}>
      <Button color={colors.primary} title='Alert' onPress={showAlert} />
      <View style={{ marginBottom: 20 }} />
      <Button color={colors.primary} title='Alert' onPress={showPrompt} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
});
