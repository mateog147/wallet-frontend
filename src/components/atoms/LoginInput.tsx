import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface Props {
  placeholder?: string;
  action: (textNumber: string) => void;
}

export const LoginInput = ({placeholder, action}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 60,
    width: '75%',
    alignSelf: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.38)',
    borderRadius: 4,
  },
  input: {
    height: '100%',
    textAlignVertical: 'center',
    padding: 10,
    color: 'black',
  },
});
