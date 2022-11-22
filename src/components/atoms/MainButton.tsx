import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  text: string;
  action?: (textNumber: string) => void;
}

export const MainButton = ({text, action}: Props) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => (action ? action(text) : console.log({text}))}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#1554F6',
    height: 60,
    width: '75%',
    alignSelf: 'center',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
});
