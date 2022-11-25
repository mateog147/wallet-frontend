import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  width?: number;
  action?: (textNumber: string) => void;
}

export const MainButton = ({text, width, action}: Props) => {
  const styles = StyleSheet.create({
    btn: {
      backgroundColor: '#1554F6',
      height: 60,
      width: width ? `${width}%` : '75%',
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
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => (action ? action(text) : console.log({text}))}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};
