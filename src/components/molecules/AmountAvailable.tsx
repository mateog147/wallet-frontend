import {View, StyleSheet} from 'react-native';
import React from 'react';
import {IconMI} from '../atoms/IconMI';
import {AmountAvailableLabel} from '../atoms/AmountavailableLabel';

interface Props {
  number?: number;
}
export const AmountAvailable = ({number}: Props) => {
  return (
    <View style={styles.container}>
      <IconMI iconName="euro-symbol" />
      <AmountAvailableLabel number={number} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
    height: 53,
    width: '92%',
    alignSelf: 'center',
  },
});
