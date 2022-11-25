import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconMI} from '../atoms/IconMI';

interface Props {
  icon?: string;
  text: string;
  action?: () => void;
}
export const IconButton = ({icon, text, action}: Props) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: 'center',
      width: '95%',
      alignItems: 'center',
    },
    textContainer: {flexDirection: 'column', flex: 1},
    text: {fontSize: 18},
  });
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => (action ? action() : console.log('press'))}>
      <IconMI iconName={icon} />

      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
