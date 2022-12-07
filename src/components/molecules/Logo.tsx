import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Isologo} from '../atoms/Isologo';
import {Logotype} from '../atoms/Logotype';

interface Props {
  size?: number;
}
export const Logo = ({size}: Props) => {
  return (
    <View style={styles.logoContainer}>
      <Isologo size={size ? size : 60} />
      <Logotype size={size ? size / 3 : 20} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 4,
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
  },
});
