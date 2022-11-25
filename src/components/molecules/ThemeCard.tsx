import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconMI} from '../atoms/IconMI';

interface Props {
  icon?: string;
  label: string;
  action?: () => void;
}
export const ThemeCard = ({icon, label, action}: Props) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => (action ? action() : console.log('theme'))}>
      <IconMI iconName={icon} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'rgba(241, 243, 244, 1)',
    width: 106,
    height: 150,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
