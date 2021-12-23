import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text
} from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';

import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';

export const InputsScreen = () => {
  const { form, onChange: onChangeInput, isSuscribirse } = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribirse: false
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.box}>
            <HeaderTitle title='TextsInputs' />
            <TextInput
              style={styles.inputStyle}
              placeholder='Ingrese nombre'
              placeholderTextColor={'grey'}
              autoCorrect={false}
              autoCapitalize='words'
              onChangeText={(value) => onChangeInput(value, 'name')}
              value={form.name}
              keyboardType='default'
              keyboardAppearance='dark'
            />
            <TextInput
              style={styles.inputStyle}
              placeholder='Ingrese correo electrónico'
              placeholderTextColor={'grey'}
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={(value) => onChangeInput(value, 'email')}
              value={form.email}
              keyboardType='email-address'
            />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={styles.inputStyle}
              placeholder='Ingrese teléfono'
              placeholderTextColor={'grey'}
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={(value) => onChangeInput(value, 'phone')}
              value={form.phone}
              keyboardType='phone-pad'
            />
            <View style={styles.containerSwitch}>
              <Text style={styles.containerSwitchText}>Suscribirse</Text>
              <CustomSwitch
                isOn={isSuscribirse}
                onChage={(value) => onChangeInput(value, 'isSuscribirse')}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  box: {
    padding: 20,
    flex: 1,
    paddingBottom: 50
  },
  inputStyle: {
    borderWidth: 1,
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    backgroundColor: 'white',
    marginVertical: 10,
    color: 'grey'
  },
  containerSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  containerSwitchText: {
    color: 'black',
    fontSize: 20,
    marginRight: 5
  },
  textState: {
    color: 'black',
    fontSize: 20
  }
});