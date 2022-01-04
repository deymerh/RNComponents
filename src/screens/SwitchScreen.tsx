import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

interface State {
  isActive: boolean,
  isHungry: boolean,
  isHappy: boolean
}

export const SwitchScreen = () => {
  const { theme: { colors } } = useContext(ThemeContext);
  const [state, setState] = useState<State>({
    isActive: true,
    isHungry: false,
    isHappy: true
  });
  const { isActive, isHappy, isHungry } = state;
  const onChange = (value: boolean, field: keyof State) => {
    setState({
      ...state,
      [field]: value
    })
  }
  return (
    <View style={styles.container}>
      <HeaderTitle title='Switches' />
      <View style={styles.containerSwitch}>
        <Text style={{ ...styles.containerSwitchText, color: colors.text }}>isActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChage={(value) => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.containerSwitch}>
        <Text style={{ ...styles.containerSwitchText, color: colors.text }}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChage={(value) => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.containerSwitch}>
        <Text style={{ ...styles.containerSwitchText, color: colors.text }}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChage={(value) => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={styles.textState}>
        {
          JSON.stringify(state, null, 5)
        }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  containerSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  containerSwitchText: {
    color: 'black',
    marginRight: 5
  },
  textState: {
    color: 'black',
    fontSize: 20
  }
});