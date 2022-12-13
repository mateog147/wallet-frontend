import {TextInput, View, StyleSheet} from 'react-native';
import React from 'react';

interface Props {
  placeholder: string;
  onChangeAction?: (value: string) => void;
  value?: string;
  isNumeric?: boolean;
}
export const FormTextInput = ({
  placeholder,
  value,
  isNumeric,
  onChangeAction,
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeAction}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        keyboardType={isNumeric ? 'numeric' : 'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.04);',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 53,
  },
  input: {
    fontSize: 18,
  },
});
