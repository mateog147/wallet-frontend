import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props {
  size?: number;
  customStyle?: any;
}

export const Logotype = ({size, customStyle}: Props) => {
  return (
    <Text style={getTextStyles(size)}>
      MATERIAL <Text style={styles.prupleText}>2</Text> UI
    </Text>
  );
};

function getTextStyles(size?: number, customStyle?: any) {
  return size ? {...styles.text, fontSize: size, ...customStyle} : styles.text;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    fontFamily: 'Montserrat',
  },
  prupleText: {
    color: '#6202EE',
  },
});
