import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  text?: string;
}

export const HorizontalRule = ({text}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

// function getTextStyles(size?: number, customStyle?: any) {
//   return size ? {...styles.text, fontSize: size, ...customStyle} : styles.text;
// }

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
  },
  text: {
    marginRight: 8,
    marginLeft: 8,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});
