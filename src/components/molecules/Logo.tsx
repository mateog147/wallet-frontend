import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Isologo} from '../atoms/Isologo';
import {Logotype} from '../atoms/Logotype';

export const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Isologo size={60} />
      <Logotype />
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
